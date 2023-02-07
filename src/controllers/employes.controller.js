import { pool } from "../db.js";

export const getEmployes = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * from empleados')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: ' algo salio mal '
        })
    }
}

export const getEmploye = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id= ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'empleado no encontrado'
        })

        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({
            message: ' algo salio mal '
        })
    }
}

export const createEmployes = async (req, res) => {
    const { name, salary } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO  empleados (name,salary) VALUES (? ,?)',
            [name, salary])
        //esto no lo entenddera la consola el app de index tiene una funcion para interpretar esos datos que es express.json()
        res.send({
            id: rows.insertId,
            name,
            salary
        })
        
    } catch (error) {
        return res.status(500).json({
            message: ' algo salio mal '
        }) 
    }
}

export const updateEmploye = async (req, res) => {
    const { id } = req.params
    const { name, salary } = req.body
    try {
        const [result] = await pool.query('update empleados set name = ifnull(?,name) ,salary = ifnull(?,salary) where id = ?', [name, salary, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'empleado no encontrado'
        })
        const [rows] = await pool.query('select * from empleados where id = ?', [id])
        console.log(result);
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message: ' algo salio mal '
        }) 
    }
}

export const deleteEmploye = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM empleados WHERE id= ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'empleado no encontrado'
        })
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({
            message: ' algo salio mal '
        }) 
    }
}
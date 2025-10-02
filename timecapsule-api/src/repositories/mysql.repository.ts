import { db } from "../config/database";

export abstract class MySQLRepository<T> {
    constructor(protected tableName: string) {}

    async create(model: Partial<T>): Promise<T>{
        const keys = Object.keys(model)
        const values = Object.values(model)

        const placeholders = keys.map(() => '?').join(', ');
        const [result] = await db.execute(
            `INSERT INTO ${this.tableName} (${keys.join(', ')}) VALUES (${placeholders})`,
            values
        );
        
        return this.findById((result as any).insertId) as Promise<T>;
    } 

    async findAll(): Promise<T[]> {
        const [rows] = await db.execute(`SELECT * FROM ${this.tableName}`);
        return rows as T[];
    }

    async findById(id: number | string): Promise<T | null> {
        const [rows] = await db.execute(
            `SELECT * FROM ${this.tableName} WHERE id = ? LIMIT 1`,
            [id]
        );

        return (rows as T[])[0] || null;
    }

    async update(id: number | string, model: Partial<T>): Promise<boolean> {
       const entries = Object.entries(model)
                            .filter(([_, value]) => value !== undefined && value !== null);

        if (!entries.length) return false;

        const setClause = entries.map(([key]) => `${key} = ?`).join(', ');

        const values = entries.map(([_, value]) => value);

        console.log(`UPDATE ${this.tableName} SET ${setClause} WHERE id = ?`, [...values, id]);
        const [result] = await db.execute(
            `UPDATE ${this.tableName} SET ${setClause} WHERE id = ?`,
            [...values, id]
        );

        return (result as any).affectedRows > 0;
    }

    async delete(id: number | string): Promise<boolean> {
        const [result] = await db.execute(
            `DELETE FROM ${this.tableName} WHERE id = ?`,
            [id]
        );
        return (result as any).affectedRows > 0;
    }

}
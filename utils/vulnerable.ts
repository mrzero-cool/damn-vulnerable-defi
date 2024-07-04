// Hardcoded credentials (Sensitive Data Exposure)
const dbPassword = "supersecretpassword123";
 
// SQL Injection vulnerability
import { Request, Response } from 'express';
import * as mysql from 'mysql';
 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: dbPassword,
    database: 'test'
});
 
connection.connect();
 
function getUser(req: Request, res: Response) {
    const userId = req.query.userId;
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.send(results);
    });
}
 
// Unvalidated Redirects and Forwards
import { Router } from 'express';
const router = Router();
 
router.get('/redirect', (req: Request, res: Response) => {
    const url = req.query.url;
    res.redirect(url);
});
 
// Insecure Randomness
function generateToken() {
    return Math.random().toString(36).substring(2);
}
 
// Usage of eval (Code Injection)
function executeCode(code: string) {
    eval(code);
}
 
// Vulnerable dependency
import * as lodash from 'lodash';
const merge = lodash.merge;
 
export { getUser, generateToken, executeCode, merge };

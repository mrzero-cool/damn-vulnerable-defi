import * as fs from 'fs';
import * as crypto from 'crypto';
import * as express from 'express';
 
const app = express();
 
// Hardcoded API key (Sensitive Data Exposure)
const apiKey = "12345-ABCDE-67890-FGHIJ";
 
// Path Traversal vulnerability
app.get('/file', (req, res) => {
    const fileName = req.query.fileName;
    fs.readFile(`./uploads/${fileName}`, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('File not found');
            return;
        }
        res.send(data);
    });
});
 
// Insecure hashing algorithm
function hashPassword(password: string): string {
    return crypto.createHash('md5').update(password).digest('hex');
}
 
// No rate limiting
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Simulate user authentication
    if (username === 'admin' && hashPassword(password) === '21232f297a57a5a743894a0e4a801fc3') {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});
 
// Lack of input validation
app.post('/submit', (req, res) => {
    const userData = req.body.data;
    // Directly using user input without validation
    const command = `echo ${userData}`;
    require('child_process').exec(command, (err, stdout, stderr) => {
        if (err) {
            res.status(500).send('Error executing command');
            return;
        }
        res.send(stdout);
    });
});
 
// Insecure direct object reference (IDOR)
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    // Directly using user-supplied ID
    res.send(`User profile of user ID: ${userId}`);
});
 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
 
// Export functions for testing
export { hashPassword };

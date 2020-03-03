CREATE USER 'manager'@'%' IDENTIFIED BY 'developer';
GRANT ALL PRIVILEGES ON *.* TO 'manager'@'%' IDENTIFIED BY 'developer';

DROP USER ‘manager’@‘localhost’;


sudo nano /etc/nginx/sites-available/default


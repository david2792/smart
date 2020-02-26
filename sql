CREATE USER 'manager'@'%' IDENTIFIED BY 'developer';
GRANT ALL PRIVILEGES ON *.* TO 'manager'@'%' IDENTIFIED BY 'developer';

DROP USER ‘manager’@‘localhost’;


sudo nano /etc/nginx/sites-available/default


wget -c https://dev.mysql.com/get/mysql-apt-config_0.8.10-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb
actualizar paquetes
sudo apt-get install mysql-server
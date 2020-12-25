-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table donorapp.tbl_blood_group
DROP TABLE IF EXISTS `tbl_blood_group`;
CREATE TABLE IF NOT EXISTS `tbl_blood_group` (
  `grp_id` int(11) DEFAULT NULL,
  `group_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table donorapp.tbl_blood_group: ~8 rows (approximately)
/*!40000 ALTER TABLE `tbl_blood_group` DISABLE KEYS */;
INSERT INTO `tbl_blood_group` (`grp_id`, `group_name`) VALUES
	(1, 'A+'),
	(2, 'B+'),
	(3, 'O+'),
	(4, 'AB+'),
	(5, 'A-'),
	(6, 'B-'),
	(7, 'O-'),
	(8, 'AB-');
/*!40000 ALTER TABLE `tbl_blood_group` ENABLE KEYS */;

-- Dumping structure for table donorapp.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `dob` varchar(255) NOT NULL,
  `bloodGroup` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8;

-- Dumping data for table donorapp.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

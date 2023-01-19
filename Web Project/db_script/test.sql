-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2020 at 03:53 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Table structure for table `note`
--

DROP TABLE IF EXISTS `note`;
CREATE TABLE IF NOT EXISTS `note` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `authorId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `authorId` (`authorId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `note`
--

INSERT INTO `note` (`id`, `title`, `content`, `subject`, `createdAt`, `updatedAt`, `authorId`) VALUES
(1, 'Notita 2', 'ceva content, mult content si mult scris', 'Pr', '2020-12-16 20:31:42', '2020-12-17 13:51:41', 1),
(2, 'N', 'ceva content, mult content si mult scris', 'Practice', '2020-12-17 13:50:56', '2020-12-17 13:50:56', 1),
(3, 'Notita 2', 'ceva content, mult content si mult scris', 'Pr', '2020-12-17 13:51:11', '2020-12-17 13:51:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notesfilters`
--

DROP TABLE IF EXISTS `notesfilters`;
CREATE TABLE IF NOT EXISTS `notesfilters` (
  `NoteId` int(11) NOT NULL,
  `NotesGroupId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`NoteId`,`NotesGroupId`),
  UNIQUE KEY `NotesFilters_NotesGroupId_NoteId_unique` (`NoteId`,`NotesGroupId`),
  KEY `NotesGroupId` (`NotesGroupId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notesfilters`
--

INSERT INTO `notesfilters` (`NoteId`, `NotesGroupId`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2020-12-16 20:31:42', '2020-12-16 20:31:42');

-- --------------------------------------------------------

--
-- Table structure for table `notesgroup`
--

DROP TABLE IF EXISTS `notesgroup`;
CREATE TABLE IF NOT EXISTS `notesgroup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filterName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notesgroup`
--

INSERT INTO `notesgroup` (`id`, `filterName`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'Filtru 1', '2020-12-16 20:31:42', '2020-12-17 13:59:35', 1);

-- --------------------------------------------------------

--
-- Table structure for table `studygroup`
--

DROP TABLE IF EXISTS `studygroup`;
CREATE TABLE IF NOT EXISTS `studygroup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `founderId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `founderId` (`founderId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `studygroup`
--

INSERT INTO `studygroup` (`id`, `name`, `description`, `createdAt`, `updatedAt`, `founderId`) VALUES
(1, 'Study group 1', 'Test study group', '2020-12-16 20:31:42', '2020-12-17 14:00:40', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `csie` varchar(255) DEFAULT NULL,
  `yearCsie` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `age`, `csie`, `yearCsie`, `createdAt`, `updatedAt`) VALUES
(1, 'adelina', '$2a$10$gVZk7R/JZeqQOJORTF0tLeKt4cK/Q0qsvgn0l8BH/IN79AfdC3ZWC', 'ceva.ceva@stud.ase.ro', 21, 'Info EN', 3, '2020-12-16 20:31:42', '2020-12-17 13:32:32');

-- --------------------------------------------------------

--
-- Table structure for table `userstudy`
--

DROP TABLE IF EXISTS `userstudy`;
CREATE TABLE IF NOT EXISTS `userstudy` (
  `UserId` int(11) NOT NULL,
  `StudyGroupId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`UserId`,`StudyGroupId`),
  UNIQUE KEY `UserStudy_StudyGroupId_UserId_unique` (`UserId`,`StudyGroupId`),
  KEY `StudyGroupId` (`StudyGroupId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userstudy`
--

INSERT INTO `userstudy` (`UserId`, `StudyGroupId`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2020-12-16 20:31:42', '2020-12-16 20:31:42');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `note`
--
ALTER TABLE `note`
  ADD CONSTRAINT `note_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `notesfilters`
--
ALTER TABLE `notesfilters`
  ADD CONSTRAINT `notesfilters_ibfk_1` FOREIGN KEY (`NoteId`) REFERENCES `note` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notesfilters_ibfk_2` FOREIGN KEY (`NotesGroupId`) REFERENCES `notesgroup` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notesgroup`
--
ALTER TABLE `notesgroup`
  ADD CONSTRAINT `notesgroup_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `studygroup`
--
ALTER TABLE `studygroup`
  ADD CONSTRAINT `studygroup_ibfk_1` FOREIGN KEY (`founderId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `userstudy`
--
ALTER TABLE `userstudy`
  ADD CONSTRAINT `userstudy_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userstudy_ibfk_2` FOREIGN KEY (`StudyGroupId`) REFERENCES `studygroup` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2024 at 10:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ccdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblaccount`
--

CREATE TABLE `tblaccount` (
  `ID` int(11) NOT NULL,
  `FIRSTNAME` varchar(255) NOT NULL,
  `LASTNAME` varchar(255) NOT NULL,
  `ACCOUNT_EMAIL` varchar(255) NOT NULL,
  `ACCOUNT_PASSWORD` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblaccount`
--

INSERT INTO `tblaccount` (`ID`, `FIRSTNAME`, `LASTNAME`, `ACCOUNT_EMAIL`, `ACCOUNT_PASSWORD`) VALUES
(1, 'John Ronan', 'Ramos', 'rjohnronan2001@gmail.com', 'test'),
(2, 'Adrian', 'Mabuti', 'adrianbarbechomabuti@gmail.com', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `tblcontactus`
--

CREATE TABLE `tblcontactus` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `MESSAGE` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblcontactus`
--

INSERT INTO `tblcontactus` (`ID`, `NAME`, `EMAIL`, `MESSAGE`) VALUES
(1, 'test', 'rjohnronan2001@gmail.com', '0'),
(2, 'Ronan', 'rjohnronan2001@gmail.com', 'testing '),
(3, 'AJ', 'jhaykhuletz22@gmail.com', 'test test'),
(4, 'test', 'rjohnronan2001@gmail.com', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `tblforgotpass`
--

CREATE TABLE `tblforgotpass` (
  `ID` int(11) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `RESET_TOKEN` varchar(255) NOT NULL,
  `RESET_TOKEN_EXPIRY` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblforgotpass`
--

INSERT INTO `tblforgotpass` (`ID`, `EMAIL`, `RESET_TOKEN`, `RESET_TOKEN_EXPIRY`) VALUES
(1, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(2, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(3, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(4, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(5, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(6, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(7, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(8, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(9, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(10, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(11, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(12, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(13, 'rjohnronan2001@gmail.com', '4a4705f17378016085d6d866029236df9acb8f99af8429f7a9080c1c7db6f567', '0000-00-00 00:00:00'),
(14, 'jhaykhuletz22@gmail.com', 'b88a6dbc84b2a110850e03d099e3494a2a79ad444a361e1b32545640ddbafe13', '0000-00-00 00:00:00'),
(15, 'rjohnronan2001@gmail.com', 'bd8fdc487993ef770c3378d0a5aecf6ee889c2a3627f98a6eab6e2413a654368', '0000-00-00 00:00:00'),
(16, 'rjohnronan2001@gmail.com', '7afb037d8e25f854d4e2b6de25285fff694e687d75910e0e9ab8d387a02cdf35', '0000-00-00 00:00:00'),
(17, 'adrianbarbechomabuti@gmail.com', '1c4eebd1fb73d02ff2c6f598f69fa92c1c9af27874fee3436b95c065095273ab', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblaccount`
--
ALTER TABLE `tblaccount`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblcontactus`
--
ALTER TABLE `tblcontactus`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblforgotpass`
--
ALTER TABLE `tblforgotpass`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblaccount`
--
ALTER TABLE `tblaccount`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tblcontactus`
--
ALTER TABLE `tblcontactus`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tblforgotpass`
--
ALTER TABLE `tblforgotpass`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

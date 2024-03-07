-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2024 at 02:33 PM
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
(1, 'John Ronan', 'Ramos', 'rjohnronan2001@gmail.com', 'Test123!'),
(2, 'Adrian', 'Mabuti', 'adrianbarbechomabuti@gmail.com', 'test'),
(3, 'Lucky', 'Dancel', 'bscs.dancellp@gmail.com', 'test');

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

-- --------------------------------------------------------

--
-- Table structure for table `tblprofile`
--

CREATE TABLE `tblprofile` (
  `ID` int(11) NOT NULL,
  `FIRST NAME` varchar(255) NOT NULL,
  `LAST NAME` varchar(255) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `PHONE_NUMBER` int(20) NOT NULL,
  `HOME_ADDRESS` varchar(255) NOT NULL,
  `DISTRICT` int(20) NOT NULL,
  `CITY` varchar(100) NOT NULL,
  `PROVINCE` varchar(100) NOT NULL,
  `POSTAL_CODE` int(10) NOT NULL,
  `GENDER` varchar(100) NOT NULL,
  `BIRTHDAY` date NOT NULL,
  `NATIONALITY` varchar(255) NOT NULL,
  `CIVIL STATUS` varchar(255) NOT NULL,
  `JOB_POSITION` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Indexes for table `tblprofile`
--
ALTER TABLE `tblprofile`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblaccount`
--
ALTER TABLE `tblaccount`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tblcontactus`
--
ALTER TABLE `tblcontactus`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tblforgotpass`
--
ALTER TABLE `tblforgotpass`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `tblprofile`
--
ALTER TABLE `tblprofile`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

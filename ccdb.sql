-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2024 at 01:45 PM
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
(1, 'John Ronan', 'Ramos', 'rjohnronan2001@gmail.com', 'P@55w0rd'),
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
-- Table structure for table `tbldepartment`
--

CREATE TABLE `tbldepartment` (
  `DEPT_ID` int(11) NOT NULL,
  `DEPARTMENT` varchar(255) NOT NULL,
  `DESCRIPTION` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbldepartment`
--

INSERT INTO `tbldepartment` (`DEPT_ID`, `DEPARTMENT`, `DESCRIPTION`) VALUES
(1, 'Accounting', 'The accounting department oversees the management of financial records, payroll, audits, budgets, and regulatory compliance in addition to financial reporting obligations.'),
(2, 'Finance', 'A finance department is the part of an organization responsible for managing all financial processes and decisions. It controls income and expenditure while also ensuring effective business running with minimum disruptions. Besides the traditional roles of handling the payroll, income and expenses, finance department responsibilities also include economic analysis to improve key business strategies.'),
(3, 'Human Resources', 'The Human Resources department oversees hiring, employee relations, training, pay, policy compliance, creating a healthy work environment, and making sure that regulation is followed'),
(4, 'IT', 'The IT department is in charge of network operations, software, hardware, cybersecurity, infrastructure, and support for technology, making sure that everything runs smoothly and securely.'),
(5, 'Marketing', 'The marketing division oversees advertising, carries out market research, creates strategies for promoting goods and services, and builds brand awareness.'),
(6, 'Sales', 'A sales department is responsible for selling products or services for a company. The department comprises a sales team that works together to make sales, increase profitability and build and maintain relationships with customers to encourage repeat purchases and brand loyalty.');

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
  `IMAGE` varchar(255) NOT NULL,
  `FIRST NAME` varchar(255) NOT NULL,
  `LAST NAME` varchar(255) NOT NULL,
  `AGE` int(100) NOT NULL,
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
  `CIVIL_STATUS` varchar(255) NOT NULL,
  `JOB_POSITION` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblroles`
--

CREATE TABLE `tblroles` (
  `ID` int(11) NOT NULL,
  `DEPT_ID` int(11) NOT NULL,
  `DEPARTMENT` varchar(255) NOT NULL,
  `POSITION` varchar(255) NOT NULL,
  `DESCRIPTION` varchar(500) NOT NULL
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
-- Indexes for table `tbldepartment`
--
ALTER TABLE `tbldepartment`
  ADD PRIMARY KEY (`DEPT_ID`);

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
-- Indexes for table `tblroles`
--
ALTER TABLE `tblroles`
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
-- AUTO_INCREMENT for table `tbldepartment`
--
ALTER TABLE `tbldepartment`
  MODIFY `DEPT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tblforgotpass`
--
ALTER TABLE `tblforgotpass`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `tblprofile`
--
ALTER TABLE `tblprofile`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblroles`
--
ALTER TABLE `tblroles`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

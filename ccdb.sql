-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2024 at 05:26 AM
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
-- Dumping data for table `tblroles`
--

INSERT INTO `tblroles` (`ID`, `DEPT_ID`, `DEPARTMENT`, `POSITION`, `DESCRIPTION`) VALUES
(1, 1, 'Accounting', 'Chief Financial Officer', 'Has a senior executive who is in charge of managing the company whole financial operations.'),
(2, 1, 'Accounting', 'Record Financial Transaction', 'It contains recording and keeping track of every financial action an organization does.'),
(3, 1, 'Accounting', 'Staff Accountant', 'Responsible for supporting the organizations financial operations by helping with a variety of accounting duties and financial activities. '),
(4, 1, 'Accounting', 'Tax Accountant', 'Focuses on issues pertaining to taxes, such as planning, reporting, and compliance.'),
(5, 2, 'Finance', 'Financial Advisor', 'Provides recommendations for investments, financial advice, and direction to help people, companies, or institutions reach their financial objectives.'),
(6, 2, 'Finance', 'Financial Budjeting', 'This consists of organizing, assigning, and managing financial resources in order to meet the aims and objectives of the company.'),
(7, 2, 'Finance', 'Managing Cash Flow', 'They involves maintaining an eye on, projecting, and optimizing the flow of cash in and out of the business to maintain its liquidity and financial stability.'),
(8, 2, 'Finance', 'Financial Budgeting', 'Responsible for entails organizing, assigning, and managing financial resources to meet the aims and objectives of the company.'),
(9, 2, 'Finance', 'Corporate Treasurer', 'Is in charge of overseeing the organization financial assets, liabilities, and risks in order to maximize financial stability, profitability, and liquidity.'),
(10, 2, 'Finance', 'Financial Controller', 'Responsible for of managing internal controls, financial reporting, accounting operations, and compliance.'),
(11, 2, 'Finance', 'Risk Manager', 'In charge of locating, evaluating, minimizing, and controlling financial risks that may have an effect on the business finances, operations, and reputation.'),
(12, 2, 'Finance', 'Investment Bunker', 'Focusing on assets that are thought to be defensive or low-risk, including blue-chip stocks with steady dividend payments, government bonds, or premium corporate bonds.'),
(13, 3, 'Human Resources', 'HR Manager', 'Holds the responsibility of managing the organizations HR strategies and operations.'),
(14, 3, 'Human Resource', 'HR Senior Manager', 'In order to support the aims and objectives of the company, they take a strategic approach to the development and implementation of HR policies, programs, and initiatives.'),
(15, 3, 'Human Resource', 'HR Onboarding', 'Is an instruction designed to greet and acclimate new hires to the company, giving them the knowledge, tools, and assistance they need to contribute positively to the team.'),
(16, 3, 'Human Resource', 'HR Employee Relations', 'Focuses managing and upholding favorable interactions between staff members and the company.'),
(17, 3, 'Human Resource', 'HR Function', 'Includes a range of procedures and activities pertaining to the management of the company staff of employees.'),
(18, 3, 'Human Resource', 'HR Director', 'Is a management position in charge of managing all facets of an organizations human resources department.'),
(19, 3, 'Human Resource', 'HR Recruitment', 'Focuses on finding, attracting, interviewing, and employing competent applicants to occupy open jobs within the company.'),
(20, 3, 'Human Resource', 'HR Training Employee', 'Focuses on creating, carrying out, and overseeing training and development initiatives to improve staff members proficiencies.'),
(21, 3, 'Human Resource', 'Sr. Business Partner', 'In charge of coordinating HR activities with the goals and overarching business plan of the company.'),
(22, 4, 'IT', 'IT Senior Manager', 'Has the responsibility of supervising and administering an organization technology-related activities and assets.'),
(23, 4, 'IT', 'Technical Architect', 'Responsible for both developing and putting into practice the technological solutions that satisfy the organization business needs. '),
(24, 4, 'IT', 'Computer Systems Manager', 'Has the duty of managing and supervising computer systems and networks on a daily basis.'),
(25, 4, 'IT', 'IT Service Management', 'Is an extensive approach for overseeing, providing, and maintaining IT services in order to satisfy the demands of the company and its clients.'),
(26, 4, 'IT', 'IT Manager', 'In charge of supervising all facets of information technology management, strategy, and execution inside a company.'),
(27, 4, 'IT', 'IT Support Especialist', 'In charge of giving end users in an organization technical help and assistance.'),
(28, 4, 'IT', 'IT Incident Management', 'Designed to swiftly restore regular service operations after an unforeseen disruption, like a cyberattack, software error, or hardware failure.'),
(29, 4, 'IT', 'Software Developer', 'In the position of creating, testing, refining, and maintaining software systems or applications to fulfill organizational requirements.'),
(30, 4, 'IT', 'Web Developer', 'Has the task of creating, developing, and managing websites or online applications that forward the aims and objectives of the company.'),
(31, 4, 'IT', 'IT Support', 'Responsible for offering end users inside a company technical support and troubleshooting.'),
(32, 4, 'IT', 'IT Coordinator', 'Acts as the main point of contact and coordination for the IT organization many projects and operations.'),
(33, 4, 'IT', 'Network Operation', 'In charge of overseeing and preserving the computer network infrastructure of the company.'),
(34, 4, 'IT', 'Enterprise Architect', 'Responsible for coordinating IT strategy and solutions with the overarching business goals and objectives of the company.'),
(35, 4, 'IT', 'Data scientist', 'Focusing on gathering insights and guiding business decision-making through the analysis and interpretation of massive amounts of data.'),
(36, 5, 'Marketing', 'Marketing Coordinator', '$esponsible for providing support for a range of marketing campaigns and projects that advance the company goods, services, or reputation. '),
(37, 5, 'Marketing', 'Public Relations Specialist', 'Is in charge of using media relations and strategic communication to manage the organization reputation and public image.'),
(38, 5, 'Marketing', 'Marketing Plan Developer', 'Responsible for for developing thorough marketing plans that specify methods and approaches to meet organizational goals.'),
(39, 5, 'Marketing', 'Sales Representative', 'For the purpose of creating leads via promotions, events, or marketing initiatives.'),
(40, 5, 'Marketing', 'Business Partner', 'Provides that the organizations entire business goals and objectives are in line with the marketing strategies, initiatives, and campaigns.'),
(41, 5, 'Marketing', 'Marketing Manager', 'Is in charge of managing all facet of marketing strategy, including planning, executing, and performing.'),
(43, 6, 'Sales', 'Sales Vice President', 'Assigned the responsibility of managing all facets of the company sales tactics and operations.'),
(44, 6, 'Sales', 'Sale Manager', 'Responsible for managing and supervising a group of sales repetitions in order to meet goals and increase income.'),
(45, 6, 'Sales', 'Service Costumer', 'Involves communicating with current clients to offer assistance, respond to questions, and guarantee client happiness.'),
(46, 6, 'Sales', 'Sale Representative', 'Responsibility for bringing in money from sales by bringing in new clients and taking care of current ones.'),
(47, 6, 'Sales', 'Account Representative', 'Responsible for overseeing and fostering ties with current customers or accounts in order to increase sales and guarantee client pleasure.'),
(48, 6, 'Sales', 'Sale Associate', 'In charge of supporting the sales force and helping with several sales-related duties.'),
(49, 6, 'Sales', 'Sale Support Specialist', 'Responsible for supporting the sales team administratively, operationally, and logistically in order to streamline sales procedures and operations. ');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

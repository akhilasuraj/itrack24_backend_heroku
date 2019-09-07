-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2019 at 07:06 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login`
--

-- --------------------------------------------------------

--
-- Table structure for table `compimages`
--

CREATE TABLE `compimages` (
  `id` int(11) NOT NULL,
  `uniq_id` text DEFAULT NULL,
  `user_ID` int(11) DEFAULT NULL,
  `img_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `compimages`
--

INSERT INTO `compimages` (`id`, `uniq_id`, `user_ID`, `img_name`) VALUES
(1, NULL, 3, 'photo-1565546885019-'),
(2, NULL, 5, 'photo-1566058368962-'),
(3, NULL, 0, 'img_name-1566222230636-'),
(4, NULL, 24, 'photo-1567479299852-'),
(5, '205f55d0-cd74-11e9-96f7-1ff10765cfb9', 24, 'photo-1567479299852-'),
(6, '3918fc70-cd74-11e9-9e90-4146536fe030', 24, 'photo-1567479299852-'),
(7, '', 24, 'photo-1567479299852-'),
(8, '5b193607-1c1a-4bfb-be47-36f80eba2ebb', NULL, 'ken-treloar-B6O-Fc4TIvE-unsplash.jpg-1567429151016-'),
(9, '14bb69f1-e54e-4add-9ee5-c33061abcf95', NULL, 'karateKid.jpg-1567429926650-'),
(10, '7063ccaa-a395-4142-9eb9-4115bb3381f8', NULL, 'wp4327349-john-wick-chapter-3-parabellum-wallpapers.jpg-1567430668985-'),
(11, 'f1b887d3-f5cc-46eb-bb65-8ebe10c8f01a', 24, 'wp2372403.jpg-1567479441590-'),
(12, '84b8dfbb-89d6-4690-8e2a-fed1b25c6858', 24, 'ghost_recon_wildlands-wallpaper-3840x2160.jpg-1567480242224.'),
(13, '9404222b-08f2-4183-bb26-f7ec879d4852', 24, 'karateKid.jpg-1567511868339.');

-- --------------------------------------------------------

--
-- Table structure for table `complains`
--

CREATE TABLE `complains` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `uuid` varchar(100) DEFAULT NULL,
  `category` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `complainImg` text DEFAULT NULL,
  `address1` text DEFAULT NULL,
  `address2` text DEFAULT NULL,
  `district` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `longitude` int(11) DEFAULT NULL,
  `latitude` int(11) DEFAULT NULL,
  `isViwed` tinyint(1) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `isAccepted` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complains`
--

INSERT INTO `complains` (`id`, `user_id`, `uuid`, `category`, `description`, `complainImg`, `address1`, `address2`, `district`, `date`, `time`, `longitude`, `latitude`, `isViwed`, `status`, `isAccepted`) VALUES
(152, 24, '096a72c3-84c3-4e3f-a888-07c90af9b108', 'Drainage Blockage-Public building', 'bla bla blaaaaaaaaaaa', '', '221/b', 'wellawatta', '3', '2019-01-03', '01:59:00', 7, 80, 0, NULL, NULL),
(153, 24, '7252b116-c44e-47ba-b1f0-76cebdfb757d', 'Mosquito breeding area', 'bla bla', 'ruins_man_loneliness_124279_1920x1200.jpg-1567524197003.', '221/b', 'wellawatta', '3', '2019-01-06', '15:02:00', 7, 80, NULL, NULL, NULL),
(154, 24, '8488207a-165b-4514-bc77-37904da9a188', 'Street-Pedestrian crossing', 'blaaaaaaaaaaaa', '', '423', 'kollupitiya', '3', '2019-12-03', '14:58:00', 7, 80, NULL, NULL, NULL),
(155, 0, NULL, 'Solid waste-house', 'blablaaa\n', 'wp4327349-john-wick-chapter-3-parabellum-wallpapers.jpg-1567532110416.', '221/b', '/b', '3', '2019-01-01', '02:59:00', 7, 80, 0, NULL, NULL),
(156, 18, NULL, 'Street-Signal post', 'blaaa', '', '221/b', 'wellawatta', '3', '2019-01-31', '01:59:00', 7, 80, 0, NULL, NULL),
(157, 24, NULL, 'Tree Cutting Debris-Public premises', 'blaaaaaaaaa', 'wp2372403.jpg-1567532970250.', '221/b', 'borella', '4', '2019-12-01', '15:56:00', 7, 80, 0, NULL, NULL),
(158, 24, NULL, 'Drainage Blockage-Public building', 'blaaaaaaaaaaaaa', 'wp4327349-john-wick-chapter-3-parabellum-wallpapers.jpg-1567534451317.', '221/b', 'borella', '4', '2019-02-02', '01:59:00', 7, 80, 0, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `FirstName` text DEFAULT NULL,
  `LastName` text DEFAULT NULL,
  `PostText` text DEFAULT NULL,
  `PostTitle` text DEFAULT NULL,
  `PostImg` text DEFAULT NULL,
  `PostDate` date DEFAULT NULL,
  `PostTime` time DEFAULT NULL,
  `isViwed` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `UserID`, `FirstName`, `LastName`, `PostText`, `PostTitle`, `PostImg`, `PostDate`, `PostTime`, `isViwed`) VALUES
(1, 1, 'dilina', 'hira', NULL, NULL, NULL, '2019-11-23', '00:00:03', 1),
(3, 2, 'sanduni', 'hsara', 'hey!good morning', NULL, NULL, '2019-11-23', '00:00:03', 1),
(5, 4, 'tin', 'tin', 'hey!', NULL, NULL, '2019-12-23', '00:00:12', 1),
(7, 4, 'tin', 'tin', 'hey!Avengers', NULL, NULL, '2019-12-23', '00:00:12', 1),
(31, 24, 'dilina', 'hiranth', 'it s wick', NULL, 'wp3917309-john-wick-3-wallpapers.jpg-1567483862750.jpeg', '2019-09-03', '09:41:12', 1),
(33, 24, 'dilina', 'hiranth', 'hei!its my day\n', NULL, '', '2019-09-03', '23:09:14', NULL),
(34, 24, 'dilina', 'hiranth', 'hei! it s monday', NULL, 'ruins_man_loneliness_124279_1920x1200.jpg-1567532435801.jpeg', '2019-09-03', '23:10:51', NULL),
(35, 24, 'dilina', 'hiranth', 'william', NULL, 'william-warby-RP5GTfJGMJM-unsplash.jpg-1567532510044.jpeg', '2019-09-03', '23:12:00', 1),
(36, 24, 'dilina', 'hiranth', 'hiking possible for men', NULL, 'brent-payton-TrUyLluA4oU-unsplash.jpg-1567702951632.jpeg', '2019-09-05', '22:32:49', 1),
(37, 28, 'sanduni', 'rathnayeka', 'hei am i dunii', NULL, 'alue-carrizo-Lo9LA8SJi3k-unsplash.jpg-1567708153807.jpeg', '2019-09-05', '23:59:27', 1),
(38, 28, 'sanduni', 'rathnayeka', 'it s gamin time\n', NULL, '', '2019-09-05', '00:00:33', 0);

-- --------------------------------------------------------

--
-- Table structure for table `profileimages`
--

CREATE TABLE `profileimages` (
  `id` int(11) NOT NULL,
  `u_id` int(11) DEFAULT NULL,
  `pic_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profileimages`
--

INSERT INTO `profileimages` (`id`, `u_id`, `pic_name`) VALUES
(12, 24, 'ghost_recon_wildlands-wallpaper-3840x2160.jpg-1566242562469.jpeg'),
(13, 23, 'ken-treloar-B6O-Fc4TIvE-unsplash.jpg-1566241913173.'),
(14, 25, 'ruins_man_loneliness_124279_1920x1200.jpg-1566242283443.jpeg'),
(15, 26, 'ghost_recon_wildlands-wallpaper-3840x2160.jpg-1566242652143.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_type` text DEFAULT NULL,
  `first_name` text DEFAULT NULL,
  `last_name` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `contact_num` int(11) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `password` text DEFAULT NULL,
  `resetPasswordToken` text DEFAULT NULL,
  `resetPasswordExpires` date DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_type`, `first_name`, `last_name`, `address`, `contact_num`, `email`, `password`, `resetPasswordToken`, `resetPasswordExpires`, `createdAt`, `updatedAt`) VALUES
(23, 'user', 'sanduni', 'ii', '221/b london', 702872900, 's@gmail.com', '$2b$10$xWU.fSJ4aHFli3Rfom0F8.tg9eUiVjwtU1iiCDMWBLRp8R1HncARS', NULL, NULL, '2019-08-19', '2019-08-19'),
(24, 'user', 'dilina', 'hiranth', '221/b wellawatta,colombo', 702872900, 'dd@gmail.com', '$2b$10$WKds9vbXHsl5rLdhvfuT1O2wzKrb3kiop.BpFD7/TAj/rhOL8KBNG', NULL, NULL, '2019-08-19', '2019-09-06'),
(25, 'user', 'sanduni', 'hasara', '221/b london', 702872900, 'shr@gmail.com', '$2b$10$.5hkDABquQhe0R84bUBa4eGuSIom9q12Rq6hokneXkh8yPoZAVSKO', NULL, NULL, '2019-08-19', '2019-08-19'),
(26, 'user', 'tushan', 'tlj', '221/b london', 702872900, 'tlj@gmail.com', '$2b$10$7LPI5QaidJe9YLiLVYuqLuk64V/3U.Cev/hp6cdBRk..JlPgt36.K', NULL, NULL, '2019-08-19', '2019-08-19'),
(27, 'user', 'itrack', '24', 'srilanka', 702872900, 'itrack24@gmail.com', '$2b$10$CRo4ybwErPAwVR3oPonrl.BjDPmCLid6aVRrbx8UJLinu0rpYIlza', '99bce6c0-ce20-11e9-9045-1b5b69342508', '2019-09-03', '2019-08-19', '2019-09-03'),
(28, 'user', 'sanduni', 'rathnayeka', '221/b rathnapura', 722254651, 'sanuni@gmail.com', '$2b$10$hZjqCftD5uL8KbvJigqhVu9Xfa9hAQxAZqnqfeqRtvWo3TW/SiwCy', NULL, NULL, '2019-09-05', '2019-09-05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `compimages`
--
ALTER TABLE `compimages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `complains`
--
ALTER TABLE `complains`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uuid` (`uuid`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profileimages`
--
ALTER TABLE `profileimages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `compimages`
--
ALTER TABLE `compimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `complains`
--
ALTER TABLE `complains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `profileimages`
--
ALTER TABLE `profileimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

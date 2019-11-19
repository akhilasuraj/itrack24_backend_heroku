-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2019 at 08:31 AM
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
  `category` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `complainImg` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `sectionName` text DEFAULT NULL,
  `isViwedByUser` tinyint(1) DEFAULT NULL,
  `isViwedCompletedByUser` tinyint(1) NOT NULL,
  `isViwedByAdmin` tinyint(1) DEFAULT NULL,
  `isAccepted` tinyint(1) DEFAULT NULL,
  `isRejected` tinyint(1) DEFAULT NULL,
  `isAssigned` tinyint(1) DEFAULT NULL,
  `isCompleted` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complains`
--

INSERT INTO `complains` (`id`, `user_id`, `category`, `description`, `complainImg`, `date`, `time`, `longitude`, `latitude`, `sectionName`, `isViwedByUser`, `isViwedCompletedByUser`, `isViwedByAdmin`, `isAccepted`, `isRejected`, `isAssigned`, `isCompleted`) VALUES
(152, 24, 'Drainage Blockage-Public building', 'bla bla blaaaaaaaaaaa', '', '2019-01-03', '01:59:00', 7, 80, NULL, 1, 1, 1, 1, NULL, 1, 1),
(153, 24, 'Mosquito breeding area-Private', 'bla bla', 'ruins_man_loneliness_124279_1920x1200.jpg-1567524197003.', '2019-01-06', '15:02:00', 7, 80, NULL, 1, 0, 1, 0, NULL, NULL, NULL),
(154, 24, 'Mosquito breeding area-Public', 'blaaaaaaaaaaaa', '', '2019-12-03', '14:58:00', 7, 80, NULL, 0, 0, 1, 0, 1, 0, NULL),
(155, 28, 'Solid waste-Public premises', 'blablaaa\n', 'wp4327349-john-wick-chapter-3-parabellum-wallpapers.jpg-1567532110416.', '2019-01-01', '02:59:00', 7, 80, NULL, 0, 0, 1, 1, NULL, NULL, NULL),
(156, 29, 'Mosquito breeding area-Public', 'blaaa', '', '2019-01-31', '01:59:00', 7, 80, NULL, 1, 0, 1, 1, NULL, NULL, NULL),
(157, 36, 'Tree Cutting Debris-Public premises', 'blaaaaaaaaa', 'wp2372403.jpg-1567532970250.', '2019-12-01', '15:56:00', 7, 80, NULL, 1, 0, 1, 1, NULL, NULL, NULL),
(158, 38, 'Mosquito breeding area-Private', 'blaaaaaaaaaaaaa', 'wp4327349-john-wick-chapter-3-parabellum-wallpapers.jpg-1567534451317.', '2019-02-02', '01:59:00', 7, 80, NULL, 1, 0, 1, 1, NULL, 1, 1),
(160, 24, 'Mosquito breeding area-Public', 'blaaaaa', 'brent-payton-TrUyLluA4oU-unsplash.jpg-1568032502072.', '2019-01-31', '13:01:00', 7, 80, NULL, 1, 0, 1, 0, NULL, 1, NULL),
(161, 71, 'Mosquito breeding area-Public', 'dumb ass', 'wp4517150-call-of-duty-modern-warfare-2019-wallpapers.jpg-1568038598789.', '2019-01-02', '01:59:00', 7, 80, NULL, 1, 0, 1, 0, 1, 1, NULL),
(163, 75, 'Drainage Blockage-Road', 'blocked', '772312-karate-kid-wallpaper-1920x1080-for-full-hd.jpg-1570964280860.', '2019-10-13', '13:59:00', 7, 80, NULL, 1, 0, 1, 0, NULL, NULL, NULL),
(164, 79, 'Mosquito breeding area-Private', 'dangerous to going on this way..', 'batman.jpg-1570964394421.', '2018-01-31', '13:59:00', 7, 80, NULL, 1, 0, 1, 1, NULL, 1, NULL),
(165, 83, 'Decaying-Waste Public', 'Color light has been broken since last day.quick fix it .', 'broken_lamp.jpg-1572760147331.jpeg', '2019-11-03', '11:15:00', 7, 80, 'Electrical', 1, 0, 1, 0, 0, 0, NULL),
(166, 80, 'Decaying-Waste Public', 'This is an dangerous tree that can fall in to house and can be harmed to people.', 'download.jpg-1572760995124.jpeg', '2019-01-31', '01:59:00', 7, 80, 'Environment', 1, 0, 1, 1, 0, 0, NULL),
(167, 81, 'Solid waste-Public premises', 'Drain has blocked since few days.', 'dims.jpg-1572761093668.jpeg', '2010-01-31', '01:59:00', 7, 80, 'Drainage', 0, 0, 1, 0, 1, 0, 1),
(168, 82, 'Drainage Blockage-Road', 'color light has been broken since few days.', 'broken_lamp.jpg-1572761197839.jpeg', '2018-01-01', '14:59:00', 7, 80, 'Electrical', 0, 0, 1, 1, 0, 0, 0),
(169, 24, 'Decaying-Waste Public', 'Decaying waste dump in the junction, there for much dissapointed to go through there.', 'garbag.jpg-1572762155244.jpeg', '2019-01-31', '13:59:00', 7, 80, 'Waste', 1, 0, 1, 0, 1, 0, 0),
(170, 24, 'Decaying-Waste Public', 'bbjnlk', '418950.jpg-1572792717061.jpeg', '2019-01-01', '12:00:00', 7.564, 6.457, 'Construction', 1, 1, 1, 1, 0, 0, 1),
(171, 24, 'Drainage Blockage-Road', 'cgjb', 'broken_lamp.jpg-1572858654889.jpeg', '2019-01-01', '01:59:00', 7.564, 6.457, 'Construction', 1, 1, 1, 1, 0, 0, 1),
(172, 24, 'Decaying-Waste Public', 'A faulty street light puts citizens in danger and should be fixed immediately.[1] If you\'ve noticed a broken street light near you, you should do your public duty and notify someone so it gets repaired as soon as possible', 'broken_lamp.jpg-1572971029018.jpeg', '2019-01-31', '13:59:00', 7.564, 6.457, 'Electrical', 1, 0, 0, 0, 0, 0, 1),
(173, 24, 'Street-Pedestrian crossing', 'crossing has been uncleared in the road near nugegoda bridge.', 'cross.jpg-1573803043050.jpeg', '2019-01-31', '13:59:00', 79.8882, 6.86989, 'Construction', 0, 0, 0, 1, 0, 0, 0),
(174, 24, 'Street-Color light', 'lamp boken near maradana lotus tower since 5 days.', 'broken_lamp.jpg-1573803792738.jpeg', '2019-01-01', '13:21:00', 79.8583, 6.92748, 'Electrical', 1, 1, 0, 0, 0, 0, 1),
(175, 24, 'Illegal-Constrction', 'illegal government build which doing by the political near the gangarama temple road', 'construction.jpg-1573803966223.jpeg', '2010-01-01', '01:59:00', 79.9031, 6.8257, 'Construction', 0, 0, 0, 0, 1, 0, 0),
(176, 24, 'Mosquito breeding area-Private', 'kela wela ine', 'dengue.jpg-1573817349380.jpeg', '2019-12-06', '18:40:00', 79.8973, 6.96494, 'Mosquito-Spreading', 1, 0, 1, 1, 1, 0, 0),
(177, 24, 'Street-Dangerous construction area', 'This was an entirely preventable tragedy. Construction is a dangerous business, which is why the Department enforces some of the most stringent worker safety regulations in the country, and why all people on a construction site should be alert and fully aware of any potential hazards. DOB investigators from our Construction Safety and Elevator Enforcement units are conducting a thorough investigation of yesterday\'s incident near Stanley Wijesundera Mawatha.', 'dangerous-Street-construction.jpg-1573842699925.jpeg', '2019-11-15', '13:58:00', 79.8639, 6.90163, 'Construction', 1, 1, 1, 1, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `employments`
--

CREATE TABLE `employments` (
  `id` int(11) NOT NULL,
  `workerID` int(11) DEFAULT NULL,
  `jobID` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employments`
--

INSERT INTO `employments` (`id`, `workerID`, `jobID`, `createdAt`, `updatedAt`) VALUES
(1, 1, 16, '2019-11-05', '2019-11-05'),
(2, 2, 16, '2019-11-05', '2019-11-05'),
(3, 4, 16, '2019-11-05', '2019-11-05'),
(4, 5, 16, '2019-11-05', '2019-11-05'),
(5, 6, 16, '2019-11-05', '2019-11-05'),
(6, 3, 8, '2019-11-05', '2019-11-05'),
(7, 7, 8, '2019-11-05', '2019-11-05'),
(8, 3, 8, '2019-11-05', '2019-11-05'),
(9, 7, 8, '2019-11-05', '2019-11-05'),
(10, 1, 10, '2019-11-05', '2019-11-05'),
(11, 2, 10, '2019-11-05', '2019-11-05'),
(12, 8, 10, '2019-11-05', '2019-11-05'),
(13, 7, 10, '2019-11-05', '2019-11-05'),
(14, 1, 7, '2019-11-05', '2019-11-05'),
(15, 2, 7, '2019-11-05', '2019-11-05'),
(16, 7, 7, '2019-11-05', '2019-11-05'),
(17, 8, 7, '2019-11-05', '2019-11-05'),
(18, 1, 7, '2019-11-05', '2019-11-05'),
(19, 2, 7, '2019-11-05', '2019-11-05'),
(20, 7, 7, '2019-11-05', '2019-11-05'),
(21, 8, 7, '2019-11-05', '2019-11-05'),
(22, 1, 7, '2019-11-05', '2019-11-05'),
(23, 2, 7, '2019-11-05', '2019-11-05'),
(24, 7, 7, '2019-11-05', '2019-11-05'),
(25, 8, 7, '2019-11-05', '2019-11-05'),
(26, 1, 12, '2019-11-05', '2019-11-05'),
(27, 2, 12, '2019-11-05', '2019-11-05'),
(28, 4, 12, '2019-11-05', '2019-11-05'),
(29, 5, 12, '2019-11-05', '2019-11-05'),
(30, 6, 12, '2019-11-05', '2019-11-05'),
(31, 7, 8, '2019-11-05', '2019-11-05'),
(32, 8, 8, '2019-11-05', '2019-11-05'),
(33, 2, 8, '2019-11-05', '2019-11-05'),
(34, 1, 8, '2019-11-05', '2019-11-05'),
(35, 7, 8, '2019-11-05', '2019-11-05'),
(36, 1, 8, '2019-11-05', '2019-11-05'),
(37, 2, 8, '2019-11-05', '2019-11-05'),
(38, 7, 8, '2019-11-05', '2019-11-05'),
(39, 8, 8, '2019-11-05', '2019-11-05');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `complainID` int(11) DEFAULT NULL,
  `supervisorID` int(11) DEFAULT NULL,
  `workStatus` text DEFAULT NULL,
  `isWorkOn` tinyint(1) DEFAULT NULL,
  `rating` text DEFAULT NULL,
  `isWorkersAdded` tinyint(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `complainID`, `supervisorID`, `workStatus`, `isWorkOn`, `rating`, `isWorkersAdded`, `createdAt`, `updatedAt`) VALUES
(7, 160, 6, 'in progress', 0, NULL, NULL, '2019-09-23', '2019-09-23'),
(8, 162, 7, 'in progress', 0, NULL, 1, '2019-10-26', '2019-11-05'),
(10, 164, 11, 'in progress', 1, NULL, NULL, '2019-10-26', '2019-10-26'),
(12, 154, 6, 'in progress', 0, NULL, NULL, '2019-10-26', '2019-10-26'),
(13, 160, 11, 'in progress', 1, NULL, NULL, '2019-10-26', '2019-10-26'),
(15, 152, 4, 'completed', 0, NULL, NULL, '2019-10-26', '2019-11-15'),
(16, 158, 4, 'completed', 0, NULL, NULL, '2019-10-26', '2019-11-15');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `FirstName` text DEFAULT NULL,
  `LastName` text DEFAULT NULL,
  `PostContent` text DEFAULT NULL,
  `PostTitle` text DEFAULT NULL,
  `PostImg` text DEFAULT NULL,
  `PostLike` int(11) DEFAULT NULL,
  `PostDisLike` int(11) DEFAULT NULL,
  `PostDate` date DEFAULT NULL,
  `PostTime` time DEFAULT NULL,
  `isViwedByUser` tinyint(1) DEFAULT NULL,
  `isViwedByAdmin` tinyint(1) DEFAULT NULL,
  `isAccepted` tinyint(1) DEFAULT NULL,
  `isRejected` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `UserID`, `FirstName`, `LastName`, `PostContent`, `PostTitle`, `PostImg`, `PostLike`, `PostDisLike`, `PostDate`, `PostTime`, `isViwedByUser`, `isViwedByAdmin`, `isAccepted`, `isRejected`) VALUES
(50, 70, 'itrack', '24', 'cryyy', 'crysis', 'crysys.jpg-1568038149176.jpeg', NULL, NULL, '2019-09-09', '19:39:52', 1, 1, 1, 0),
(51, 70, 'itrack', '24', 'hei welcome today yoyo', 'hei! it s today....', 'wp2372403.jpg-1568038487989.jpeg', NULL, NULL, '2019-09-09', '19:45:31', 1, 1, 1, 0),
(52, 70, 'itrack', '24', 'caption', 'hey!', 'wp2372403.jpg-1568038487989.jpeg', NULL, NULL, '2019-09-09', '19:48:13', 0, 1, 1, 0),
(53, 70, 'itrack', '24', 'todayaaaaa', 'hei', 'wp2372403.jpg-1568038487989.jpeg', NULL, NULL, '2019-09-09', '19:55:24', 1, 1, 0, 1),
(54, 70, 'itrack', '24', 'kid', 'karate kid', 'karateKid.jpg-1568039152691.jpeg', NULL, NULL, '2019-09-09', '19:56:16', 1, 1, 0, 0),
(55, 70, 'itrack', '24', 'dead\n', 'ghost recorn', 'ghost_recon_wildlands-wallpaper-3840x2160.jpg-1568039191283.jpeg', NULL, NULL, '2019-09-09', '19:56:50', 1, 0, 0, 0),
(93, 24, 'Dilina', 'hirantha', 'Sri Lanka is experiencing its worst natural disaster since, arguably, the tsunami. Thousands have been displaced and hundreds killed by the floods and landslides caused by the unprecedented rain (ironic in itself given that many for weeks before had been praying for rain to bring some relief to a heat wave that had been plaguing the country)', 'Flood risk in Srilanka.', 'flood.jpg-1573804271322.jpeg', NULL, NULL, '2019-11-15', '13:21:11', 0, 0, 0, 1),
(94, 24, 'Dilina', 'hirantha', 'Thanks for visiting :) Let me know if you have some suggestions or feedback for this post in the comment section. Looking for any tutorial or demo on FreakyJolly, just drop me a message', 'baw baw', 'garbage throw.jpg-1573815818482.jpeg', NULL, NULL, '2019-11-15', '16:33:38', 1, 0, 1, 0),
(95, 24, 'dilina', 'hirantha', 'buwakka', 'bla', '1.jpg-1573817250244.jpeg', NULL, NULL, '2019-11-15', '16:57:30', 1, 0, 1, 0);

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
(12, 24, 'IMG-20191008-WA0014.jpg-1573309672350.jpeg'),
(13, 23, 'ken-treloar-B6O-Fc4TIvE-unsplash.jpg-1566241913173.'),
(14, 25, 'ruins_man_loneliness_124279_1920x1200.jpg-1566242283443.jpeg'),
(15, 26, 'ghost_recon_wildlands-wallpaper-3840x2160.jpg-1566242652143.jpeg'),
(16, 70, 'crysys.jpg-1568382960591.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `section_name` text DEFAULT NULL,
  `subcategory1` text DEFAULT NULL,
  `subcategory2` text DEFAULT NULL,
  `subcategory3` text DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `section_name`, `subcategory1`, `subcategory2`, `subcategory3`, `createdAt`, `updatedAt`) VALUES
(1, 'Electrical', 'Stree-lamp', 'Street-Color light', 'Street-Signal post', NULL, NULL),
(3, 'Environment', 'Street-Dangerous tree', 'Tree Cutting Debris-Private', 'Tree Cutting Debris-Public premises', NULL, NULL),
(4, 'Construction', 'Street-Dangerous construction area', 'Street-Pedestrian crossing', 'Illegal-Constrction', NULL, NULL),
(5, 'Waste', 'Solid waste-Private', 'Solid waste-Public premises', 'Decaying-Waste Public', NULL, NULL),
(6, 'Drainage', 'Drainage Blockage-Private', 'Drainage Blockage-Public building', 'Drainage Blockage-Road', NULL, NULL),
(7, 'Mosquito-Spreading', 'Mosquito breeding area-Public', 'Mosquito breeding area-Private', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `supervisors`
--

CREATE TABLE `supervisors` (
  `id` int(11) NOT NULL,
  `firstname` text DEFAULT NULL,
  `lastname` text DEFAULT NULL,
  `contactno` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `password` text DEFAULT NULL,
  `jobcategory1` text DEFAULT NULL,
  `jobcategory2` text DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supervisors`
--

INSERT INTO `supervisors` (`id`, `firstname`, `lastname`, `contactno`, `email`, `password`, `jobcategory1`, `jobcategory2`, `createdAt`, `updatedAt`) VALUES
(1, 'johny', 'lenin', '702872900', 'john@gmail.com', '$2b$10$BSF06EUKqGxJ1uJHxjg/YOmKjrbaBVQjyjXJ/evadubOitPm5JYb6', 'Mosquito breeding area', 'Drainage Blockage-Public building', '2019-09-22', '2019-09-22'),
(2, 'mick', 'lord', '702872900', 'mick@gmail.com', '$2b$10$/zh4P34gA801fEs15P5SgOQuk3iRIZbPQ8dXHNNHiVc.opQVv1p/y', 'Tree Cutting Debris-Public premises', 'Solid waste-house', '2019-09-22', '2019-09-22'),
(3, 'levi', 'poter', '702872900', 'levi@gmail.com', '$2b$10$r01YYoR.7xzCZL.96g4fjOnVbkLBhbpWP8hclW6kO9sksVHoMKkte', 'Tree Cutting Debris-Public premises', 'Solid waste-house', '2019-09-22', '2019-09-22'),
(4, 'haris', 'mark', '702872900', 'haris@gmail.com', '$2b$10$ZLXAxXqULKhxBPK6QvicMO8e/5OXY3Qf525D9EGQclui95ysWr2AW', 'Drainage Blockage-Public building', 'Street-Pedestrian crossing', '2019-09-22', '2019-09-22'),
(5, 'hujiko', 'kokomata', '702872900', 'hujiko@gmail.com', '$2b$10$S8VoY/zvcGizKqHQ4ul6GOJVEShX5mIaBtG8ZNjP0uIKYszFHnkwq', 'Tree Cutting Debris-Public premises', 'Street-Pedestrian crossing', '2019-09-22', '2019-09-22'),
(6, 'nikamata', 'hukamodo', '702872900', 'nikmata@gmail.com', '$2b$10$5yL4GRmicUXVKUgl3JvGaOYCfs1TwCxv6u/zhHwP30FoTeVMnpNeW', 'Street-Pedestrian crossing', 'Mosquito breeding area', '2019-09-22', '2019-09-23'),
(7, 'hujo', 'nikando', '702872900', 'hujo@gmail.com', '$2b$10$Wx/BigIh/zqlABJgJYl8iOi673BWaXhUH7G0eMYNq2vnb.x/ARSGa', 'Tree Cutting Debris-Public premises', 'Drainage Blockage-Public building', '2019-09-22', '2019-09-22'),
(9, 'dimuth', 'koorera', '2147483647', 'dimuth@gmail.com', '$2b$10$zPhArvXDQxAyCqTH3KHfc.3i35yL.BLCf9cUeFsk9LynanE1g2NaO', 'Street-Color light', 'Street-lamp', '2019-09-24', '2019-09-24'),
(11, 'kasun', 'perera', '2147483647', 'kasun@gmail.com', '$2b$10$DV8evfPLooSqw331GX0W0OZHFC70l9IiTonUMgrq4TP/hoHwEhPiS', 'Street-Dangerous tree', 'Street-lamp', '2019-10-26', '2019-10-26'),
(12, 'ruwan', 'wijewardena', '702875499', 'ruwan@gmail.com', '$2b$10$ZkF/dVtt7Pw5X06J5WUdEukjGKy9QFBZQCHLJ4zdGG8xm727Fwby6', 'Tree Cutting Debris-Public premises', 'Solid waste-house', '2019-10-26', '2019-10-26'),
(13, 'Akhila', 'Abesinghe', '702872900', 'akhila@gmail.com', '$2b$10$8HdJlSUeGbucHt044Hf4QeD2Z/Aq2OMvtIsv8Xi8p.JRC6y/rEkwy', NULL, NULL, '2019-11-02', '2019-11-02'),
(14, 'Akhila', 'Abesinghe', '702872900', 'suraj@gmail.com', '$2b$10$y5d7sSAd7iJO6FS63jA7ue55TZWrlgkSk4a9J6Gq2U000bIDBMczy', NULL, NULL, '2019-11-02', '2019-11-02'),
(15, 'Sanduni', 'rathnayeka', '702872900', 'Sanduni@gmail.com', '$2b$10$ePNoyxBZ44h36uA6ony47eozA7GeSyl/OG2aJLwWSy13A08OxAblW', NULL, NULL, '2019-11-02', '2019-11-02'),
(17, 'Sidath', 'Ranasinghe', '0772584562', 'sidath@gmail.com', '$2b$10$xbVmiKu/1XWNExWH9trryefZLjhENCw.JiEZ0lwioOvsH5JOcEv1q', 'Electrical', 'Construction', '2019-11-05', '2019-11-05');

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
  `contact_num` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `password` text DEFAULT NULL,
  `resetPasswordToken` text DEFAULT NULL,
  `resetPasswordExpires` date DEFAULT NULL,
  `isActivated` tinyint(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_type`, `first_name`, `last_name`, `address`, `contact_num`, `email`, `password`, `resetPasswordToken`, `resetPasswordExpires`, `isActivated`, `createdAt`, `updatedAt`) VALUES
(23, 'user', 'mahela', 'wijewardena', '171/wellwatta/colombo', '702872900', 'mahela@gmail.com', '$2b$10$MtI40p2HencmAJ8kkgqNieDC9k6aNo0rSzXlxVd/w/Md4MyUEEe9m', NULL, NULL, NULL, '2019-08-19', '2019-08-19'),
(24, 'user', 'Dili', 'hirantha', '221/b wellawatta,colombo', '702872900', 'dd@gmail.com', '$2b$10$4hoblpA9rwTPK.qUQpuRWexfSt.qH9TK28hvVQYje.D0xhQC4v1r2', '90904970-0773-11ea-817d-b11375182b43', '2019-11-15', 1, '2019-08-19', '2019-11-16'),
(25, 'user', 'sanduni', 'hasara', '221/b london', '702872900', 'shr@gmail.com', '$2b$10$.5hkDABquQhe0R84bUBa4eGuSIom9q12Rq6hokneXkh8yPoZAVSKO', NULL, NULL, NULL, '2019-08-19', '2019-08-19'),
(26, 'user', 'tushan', 'tlj', '221/b london', '702872900', 'tlj@gmail.com', '$2b$10$7LPI5QaidJe9YLiLVYuqLuk64V/3U.Cev/hp6cdBRk..JlPgt36.K', NULL, NULL, NULL, '2019-08-19', '2019-08-19'),
(28, 'user', 'sanduni', 'rathnayeka', '221/b rathnapura', '722254651', 'sanuni@gmail.com', '$2b$10$hZjqCftD5uL8KbvJigqhVu9Xfa9hAQxAZqnqfeqRtvWo3TW/SiwCy', NULL, NULL, NULL, '2019-09-05', '2019-09-05'),
(29, 'user', 'akhila', 'abesinghe', '221/b london', '702872900', 'hiki@gmail.com', '$2b$10$2I2c867kwpwh8lemkAUmkOZhZgDorlu.5hyM8O7NdD4l46Uj5UPdK', NULL, NULL, 1, '2019-09-07', '2019-09-07'),
(36, 'user', 'namal', 'kuamra', '221/b london', '702872900', 'k@gmail.com', '$2b$10$tSw8bdK4RMPJsq9GNHIXnOIzbhlCtzXmmpVYfUrsULjrTNtuJYtBu', NULL, NULL, 1, '2019-09-07', '2019-09-07'),
(38, 'user', 'lasith', 'malinga', '221/b london', '702872900', 'mali@gmail.com', '$2b$10$RyPhcBgJdw.jME9xegzv1.WI1MFW0nuuKubDFIvXA4QWWtjfPJKia', NULL, NULL, 1, '2019-09-07', '2019-09-07'),
(71, 'user', 'dilina', '24', '221/b kurunegla', '702872900', 'dh@gmail.com', '$2b$10$OkdVOqFAghScV3mgIehlxOKvoHGTxkGLlGd2yZRcvCSAVja6/V53S', NULL, NULL, 1, '2019-09-08', '2019-09-08'),
(75, 'user', 'sanduni', 'rathnayeka', 'rathnapura', '702872900', 'sandu8249@gmail.com', '$2b$10$ezbxwT552y5vtnCoG2tFD.C.BBtCQObq0QdUATa6RczDVFfY3Ysua', NULL, NULL, 1, '2019-09-09', '2019-09-09'),
(79, 'admin', 'itrack', '24', '221/b wellawatta,colombo', '702872900', 'itrack24@gmail.com', '$2b$10$L9.bB4OsO1wkCVsspROR5uhrmZP6aoKK6.E9Sf7QrCvwKS8v6j.lq', '1c4cc4f0-0776-11ea-be79-e3dbcfe792eb', '2019-11-15', 1, '2019-10-26', '2019-11-15'),
(80, 'user', 'Sidath', 'Ranasinghe', '221/kegalle', '774562387', 'ranasinghe@gmail.com', '$2b$10$YBws.NHDlVfmefZS0HUqh.lSheLA9Jc.cKzxrg8EoFyAPYA9DzPlu', NULL, NULL, 0, '2019-11-02', '2019-11-02'),
(81, 'user', 'Dilina', 'hiranth', '221/b wellawatta,colombo', '702872900', 'd@gmil.com', '$2b$10$Otw6vPRCkoTAaNkZKQnQ8OZyzEWDNpi7jwGrZHtea00CAD8mLDRu6', NULL, NULL, 0, '2019-11-02', '2019-11-02'),
(82, 'user', 'Dilina', 'hiranth', '221/b wellawatta,colombo', '702872900', 'dhd@gmail.com', '$2b$10$pBMIH5btFbqBf9JEyXIc..ID3IoWv7THT/9KDfiMo42nhyIlzuf8G', NULL, NULL, 1, '2019-11-02', '2019-11-15'),
(83, 'user', 'lahiru', 'neranjan', 'rathnapura/kuruwita', '775648922', 'lahiru@gmail.com', '$2b$10$LJkL8qL6fj5.TiN4IJfz.OK4yAo9EPQrWUqIJUBSoWG.DOFm0N9tK', NULL, NULL, 1, '2019-11-03', '2019-11-03'),
(84, 'user', 'janaka', 'sampath', 'alawwa/221', '774562398', 'janaka@gmail.com', '$2b$10$uTL3ECanOuKMJQZvlLbTnuF87F63PyHQn18Q9Da9F.7S37mo9mwhe', NULL, NULL, 1, '2019-11-04', '2019-11-04'),
(85, 'user', 'dexter', 'crouse', '221/b wellawatta,colombo', '0702875550', 'dexter@gmail.com', '$2b$10$RM60pVjnqlY/pIH.bypg9uEZt2Ekvit0XEw.qT7zF0RNLHI/Oh9pG', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(86, 'user', 'john', 'wick', '221/b wellawatta,colombo', '0705235550', 'john@gmail.com', '$2b$10$aZ/QyOwiW1BzCiY1by0uxe08gQwmZOtpBkMwhzri4eSN7eLgJHz3S', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(87, 'user', 'john', 'wick', '221/b wellawatta,colombo', '0705235550', 'johny@gmail.com', '$2b$10$arOeSudtsNk.9HGgPAa9YOv8KX6WEqfcFmfBeWSik.X9eLbW11Nfm', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(88, 'user', 'd', 'h', '221/b kurunegla', '0775648922', 'ddr@gmail.com', '$2b$10$Xp7VVRtWcYmRaelEOVXdBOVT3kcO6RiydUROMIYs/EttBIg6PlKW6', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(89, 'user', 'dunken', 'ekanayeka', '221/b wellawatta,colombo', '07056478922', 'dunken@gmail.com', '$2b$10$nOtHkFSUJphQhs4h3OXTuOXHW5AMkQA0Z9SFkYRDbA80/6PuWVwmq', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(90, 'user', 'denti', 'ddd', '221/b wellawatta,colombo', '465132', 'denti@gmail.com', '$2b$10$EKaCsQ2K8EhNTXp4Oj7OKOnNjg5FlkZejrYvZUf3IbDZfl.wKhCBW', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(91, 'user', 'Dilina', 'hiranth', '221/b wellawatta,colombo', '0702872900', 'boxer@gmail.com', '$2b$10$1ONIfIwiTTlm8NkPdJuQ9e/rIsXyMmP1QF0A53sbcO0Bxr5fWcOy2', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(92, 'user', 'Dilina', 'hiranth', '221/b london', '465132', 'dont@gmail.com', '$2b$10$1nGpCUhGzX1AfTQLrh0d4OKO9C2rVDMGQt8yN6R7V9HZeO7G6QbGa', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(93, 'user', 'Dilina', 'hiranth', '221/b london', '465132', 'ado@gmail.com', '$2b$10$i4FqIBfKIz2IdZxjk6LLYOsqpkRrfan.rjCJzuf03HmX0uZbF3nM.', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(94, 'user', 'Dilina', 'hiranth', '221/b london', '465132', 'machan@gmail.com', '$2b$10$tGNL9gNti1N0tKQwqYl7M.3UrmEXpcuqRSa3vMyTbqh/F9tMDUBVi', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(95, 'user', 'dilina', 'hiranth', '221/b wellawatta,colombo', '0702872900', 'npm@gmail.com', '$2b$10$OKwxn3YPZB1Vu6qZfjiS8e7Kqvz3AfgResoAJe91mCt4eIR1dOdxe', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(96, 'user', 'pk', '24', 'colombo', '07745689122', 'pk@gmail.com', '$2b$10$byNyzgJHmUsW6LFuUh2iaeoJv5ph93sVAIP6sTYBqESk/IBRRBhAW', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(97, 'user', 'sarath', '24', 'colombo', '07745689122', 'sarath@gmail.com', '$2b$10$opGfLmyCtSzNBsBFR08Luey4qbM9Zr58G6GUBLjSFrcs1Tir4.U6S', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(98, 'user', 'Dilina', 'hiranth', '221/b wellawatta,colombo', '0702872900', 'godda@gmail.com', '$2b$10$f0qEPcxxPTMVjdEg94IFluLweL8.PU6SDyAJoAskxY2JBRm0plLlO', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(99, 'user', 'dilina', 'hiranth', '221/b london', '0702872900', 'tiptip@gmail.com', '$2b$10$Gq/R.SXZF2H49YBcLJHVu.ST3u1cofDniPb2oY3krNaBfxjdEBpa.', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(100, 'user', 'us', 'america', '221/b wellawatta,colombo', '0702872900', 'america@gmail.com', '$2b$10$6fpV8qwVzb9p6BRPjbEkROs3wV6PNAe9K5n61eXf34O6pLMDM9Ul2', NULL, NULL, 0, '2019-11-15', '2019-11-15'),
(101, 'user', 'london', '24*7', '221/b london', '0702872900', 'london@gmail.com', '$2b$10$1N9YQezlYosr7FsSd7kA.ezyZxFJKcGalip6sCiquN1dGInF8yCei', NULL, NULL, 0, '2019-11-15', '2019-11-15');

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--

CREATE TABLE `workers` (
  `id` int(11) NOT NULL,
  `LastName` text DEFAULT NULL,
  `Nicno` text DEFAULT NULL,
  `Contact` text DEFAULT NULL,
  `JobType1` text DEFAULT NULL,
  `JobType2` text DEFAULT NULL,
  `availability` tinyint(1) DEFAULT NULL,
  `jobID` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `workers`
--

INSERT INTO `workers` (`id`, `LastName`, `Nicno`, `Contact`, `JobType1`, `JobType2`, `availability`, `jobID`, `createdAt`, `updatedAt`) VALUES
(1, 'Kumara', '972851622V', '0702456788', 'Drainage Blockage-Public building', 'Street-Pedestrian crossing', 0, NULL, NULL, '2019-11-05'),
(2, 'Jayasekara', '972854677V', '070254896', 'Drainage Blockage-Public building', 'Street-Pedestrian crossing', 0, NULL, NULL, '2019-11-05'),
(3, 'Perera', '995634999V', '070225456112', 'Mosquito breeding area', 'Solid waste-house', 1, NULL, NULL, NULL),
(4, 'Thisera', '8562298555K', '0774562238', 'Tree Cutting Debris-Public premises', 'Drainage Blockage-Public building', 1, NULL, NULL, '2019-11-05'),
(5, 'Zoysa', '8945632175J', '0724561239', 'Drainage Blockage-Public building', 'Street-Dangerous tree', 1, NULL, NULL, '2019-11-05'),
(6, 'Dunken', '9565433591V', '077456989662', 'Tree Cutting Debris-Public premises', 'Drainage Blockage-Public building', 1, NULL, NULL, '2019-11-05'),
(7, 'Lasitha', '99854562K', '07745632189', 'Mosquito breeding area', 'Street-Pedestrian crossing', 0, NULL, NULL, '2019-11-05'),
(8, 'Yogaraja', '9056455123G', '0771234895', 'Street-Pedestrian crossing', 'Street-Dangerous tree', 0, NULL, NULL, '2019-11-05'),
(10, 'Roshan', 'Chathurnaga', '07745612356', 'Drainage Blockage-house', 'Street-Color light', 1, NULL, '2019-11-02', '2019-11-02');

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
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employments`
--
ALTER TABLE `employments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supervisors`
--
ALTER TABLE `supervisors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT for table `employments`
--
ALTER TABLE `employments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `profileimages`
--
ALTER TABLE `profileimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `supervisors`
--
ALTER TABLE `supervisors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `workers`
--
ALTER TABLE `workers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

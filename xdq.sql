-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2019-04-29 11:19:54
-- 服务器版本： 5.7.22-log
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xdq`
--

-- --------------------------------------------------------

--
-- 表的结构 `addLesson`
--

CREATE TABLE `addLesson` (
  `openid` varchar(50) NOT NULL,
  `lessonid` int(6) NOT NULL,
  `slesson` varchar(20) NOT NULL,
  `sclass` varchar(20) NOT NULL,
  `setTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `lesson`
--

CREATE TABLE `lesson` (
  `lessonId` int(5) NOT NULL,
  `openid` varchar(50) NOT NULL,
  `slesson` varchar(20) NOT NULL,
  `sclass` varchar(20) NOT NULL,
  `setTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `lessonKey`
--

CREATE TABLE `lessonKey` (
  `keyid` int(11) NOT NULL,
  `lessonid` int(5) NOT NULL,
  `lessonkey` varchar(20) NOT NULL,
  `state` varchar(5) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `queqin`
--

CREATE TABLE `queqin` (
  `keyid` int(6) NOT NULL,
  `lessonid` int(6) NOT NULL,
  `openid` varchar(50) NOT NULL,
  `xuehao` int(11) NOT NULL,
  `name` varchar(10) NOT NULL,
  `qtime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `signList`
--

CREATE TABLE `signList` (
  `keyid` int(10) NOT NULL,
  `lessonId` int(20) NOT NULL,
  `openid` varchar(50) NOT NULL,
  `name` varchar(20) NOT NULL,
  `xuehao` varchar(20) NOT NULL,
  `signTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `student`
--

CREATE TABLE `student` (
  `openid` varchar(50) NOT NULL,
  `name` varchar(10) NOT NULL,
  `xuehao` int(20) NOT NULL,
  `ischange` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `suggestion`
--

CREATE TABLE `suggestion` (
  `id` int(5) NOT NULL,
  `nick` varchar(20) NOT NULL,
  `user_img` varchar(200) NOT NULL,
  `suggest_content` varchar(300) NOT NULL,
  `suggest_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `openid` varchar(200) NOT NULL,
  `session_key` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addLesson`
--
ALTER TABLE `addLesson`
  ADD PRIMARY KEY (`openid`,`lessonid`);

--
-- Indexes for table `lesson`
--
ALTER TABLE `lesson`
  ADD PRIMARY KEY (`lessonId`);

--
-- Indexes for table `lessonKey`
--
ALTER TABLE `lessonKey`
  ADD PRIMARY KEY (`keyid`);

--
-- Indexes for table `queqin`
--
ALTER TABLE `queqin`
  ADD PRIMARY KEY (`keyid`,`openid`);

--
-- Indexes for table `signList`
--
ALTER TABLE `signList`
  ADD PRIMARY KEY (`keyid`,`openid`) USING BTREE;

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`openid`);

--
-- Indexes for table `suggestion`
--
ALTER TABLE `suggestion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`openid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `lesson`
--
ALTER TABLE `lesson`
  MODIFY `lessonId` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=519;

--
-- 使用表AUTO_INCREMENT `lessonKey`
--
ALTER TABLE `lessonKey`
  MODIFY `keyid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=618;

--
-- 使用表AUTO_INCREMENT `suggestion`
--
ALTER TABLE `suggestion`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

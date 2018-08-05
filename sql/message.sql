-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- 主机: localhost
-- 生成日期: 2018 年 07 月 20 日 23:47
-- 服务器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- 数据库: `xym_lechun`
-- 

-- --------------------------------------------------------

-- 
-- 表的结构 `message`
-- 

CREATE TABLE `message` (
  `id` int(10) NOT NULL auto_increment,
  `nickname` varchar(20) collate utf8_unicode_ci NOT NULL,
  `mobile` varchar(11) collate utf8_unicode_ci NOT NULL,
  `area` varchar(30) collate utf8_unicode_ci NOT NULL,
  `id_card` varchar(18) collate utf8_unicode_ci NOT NULL,
  `sex` enum('0','1') collate utf8_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `profession` varchar(200) collate utf8_unicode_ci NOT NULL,
  `children` enum('0','1') collate utf8_unicode_ci NOT NULL,
  `headImage` varchar(200) collate utf8_unicode_ci NOT NULL,
  `isVideo` enum('0','1') collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

-- 
-- 导出表中的数据 `message`
-- 

INSERT INTO `message` VALUES (2, '', '18201084548', '', '', '0', '0000-00-00', '', '0', '', '0');

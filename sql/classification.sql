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
-- 数据库: `lechun`
-- 

-- --------------------------------------------------------

-- 
-- 表的结构 `classification`
-- 

CREATE TABLE `classification` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(200) collate utf8_unicode_ci NOT NULL,
  `sTitle` varchar(200) collate utf8_unicode_ci NOT NULL,
  `list` varchar(200) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

-- 
-- 导出表中的数据 `classification`
-- 

INSERT INTO `classification` VALUES (1, '乐纯三三三倍酸奶·经典 135g', '三倍鲜牛奶 · 三倍乳酸菌 · 三倍优质蛋白', '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]');
INSERT INTO `classification` VALUES (2, '乐纯三三三倍酸奶·纤巧 80g', '一次吃的完 · 想吃就吃无负担', '[2,7]');
INSERT INTO `classification` VALUES (3, '乐纯三三三倍酸奶·家庭装 500g', '全家人都喜欢 · 百搭基础款', '[19,20]');
INSERT INTO `classification` VALUES (4, '福利社·只选全球尖货', '用最划算的价格 · 买最优质的产品', '[9,6]');

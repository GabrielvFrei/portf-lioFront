-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 12-Abr-2024 às 20:52
-- Versão do servidor: 8.0.27
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_clientes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_clientes`
--

DROP TABLE IF EXISTS `tb_clientes`;
CREATE TABLE IF NOT EXISTS `tb_clientes` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `telefone` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nascto` date NOT NULL,
  `fotoUrl` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `senha` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `tb_clientes`
--

INSERT INTO `tb_clientes` (`codigo`, `nome`, `email`, `telefone`, `nascto`, `fotoUrl`, `senha`) VALUES
(11, 'kauan', 'sadtg', '(23)1', '0000-00-00', 'fotosClientes/c1bc4a9f33a6520a63776d57dbd49ac2.jpg', 'd41d8cd98f00b204e9800998ecf8427e'),
(12, 'adfa', 'kauan@gmail.com', '(11)95959-3706', '0000-00-00', 'fotosClientes/7f349e7946c38d69bf15bfcf4a841315.jpg', 'd41d8cd98f00b204e9800998ecf8427e'),
(13, 'gasdga', 'asdga', '(21)12122-1', '1111-01-11', 'fotosClientes/5f0fdef52532c7bf3d7e5eeabe0c6dd3.jpg', 'd41d8cd98f00b204e9800998ecf8427e'),
(14, 'Sadzin', 'kauanleonardo@gmail.com', '(11)95953-7067', '2007-03-16', 'fotosClientes/64ed8b443880977607f4274095a4bd29.jpg', 'd41d8cd98f00b204e9800998ecf8427e');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

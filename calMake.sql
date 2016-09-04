-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema calendar
-- -----------------------------------------------------
-- Kalendář událostí

-- -----------------------------------------------------
-- Schema calendar
--
-- Kalendář událostí
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `calendar` DEFAULT CHARACTER SET utf8 ;
USE `calendar` ;

-- -----------------------------------------------------
-- Table `calendar`.`table1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `calendar`.`table1` (
  `Date` DATE NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(100) NULL,
  PRIMARY KEY (`Date`))
ENGINE = InnoDB;

CREATE USER 'calUser' IDENTIFIED BY '123456';

GRANT ALL ON `calendar`.* TO 'calUser';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

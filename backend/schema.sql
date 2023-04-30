-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema craftseeker
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema craftseeker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `craftseeker` DEFAULT CHARACTER SET utf8mb3 ;
USE `craftseeker` ;

-- -----------------------------------------------------
-- Table `craftseeker`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `craftseeker`.`clients` (
  `clientId` INT NOT NULL AUTO_INCREMENT,
  `clientFirstName` VARCHAR(45) NOT NULL,
  `clientAdress` VARCHAR(255) NOT NULL,
  `clientEmail` VARCHAR(45) NOT NULL,
  `clientPhone` VARCHAR(45) NOT NULL,
  `clientDateOfBirth` DATE NOT NULL,
  `clientLastName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`clientId`),
  UNIQUE INDEX `idclients_UNIQUE` (`clientId` ASC) VISIBLE,
  UNIQUE INDEX `clientEmail_UNIQUE` (`clientEmail` ASC) VISIBLE,
  UNIQUE INDEX `clientPhone_UNIQUE` (`clientPhone` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `craftseeker`.`workers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `craftseeker`.`workers` (
  `workersId` INT NOT NULL AUTO_INCREMENT,
  `workerFirstName` VARCHAR(45) NOT NULL,
  `workerLastName` VARCHAR(45) NOT NULL,
  `workerAdress` VARCHAR(45) NOT NULL,
  `workerEmail` VARCHAR(45) NOT NULL,
  `workerCategory` VARCHAR(255) NOT NULL,
  `workerDateOfBirth` VARCHAR(45) NOT NULL,
  `workerYearsOfExperience` INT NULL DEFAULT NULL,
  `workerRating` INT NULL DEFAULT NULL,
  `workerPhoneNumber` VARCHAR(45) NOT NULL,
  `workerNumberOfJobs` INT NULL DEFAULT NULL,
  `workerAvailabillity` TINYINT NULL DEFAULT NULL,
  `workerPassword` VARCHAR(255) NOT NULL,
  `workerJob` VARCHAR(255) NOT NULL,
  `workerProfessionalSummary` LONGTEXT NULL DEFAULT NULL,
  `workerTotalRating` INT NULL DEFAULT NULL,
  PRIMARY KEY (`workersId`),
  UNIQUE INDEX `workersId_UNIQUE` (`workersId` ASC) VISIBLE,
  UNIQUE INDEX `workerEmail_UNIQUE` (`workerEmail` ASC) VISIBLE,
  UNIQUE INDEX `workerPhoneNumber_UNIQUE` (`workerPhoneNumber` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `craftseeker`.`reportsoftheclients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `craftseeker`.`reportsoftheclients` (
  `clientReportId` INT NOT NULL AUTO_INCREMENT,
  `clientId` INT NOT NULL,
  `workersId` INT NOT NULL,
  `clientReportingWorkerTitle` VARCHAR(255) NOT NULL,
  `clientReportingWorkerBody` LONGTEXT NOT NULL,
  `clientReportDate` DATETIME NOT NULL,
  PRIMARY KEY (`clientReportId`),
  INDEX `clientId` (`clientId` ASC) VISIBLE,
  INDEX `workersId` (`workersId` ASC) VISIBLE,
  CONSTRAINT `reportsoftheclients_ibfk_1`
    FOREIGN KEY (`clientId`)
    REFERENCES `craftseeker`.`clients` (`clientId`),
  CONSTRAINT `reportsoftheclients_ibfk_2`
    FOREIGN KEY (`workersId`)
    REFERENCES `craftseeker`.`workers` (`workersId`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `craftseeker`.`reportsoftheworkers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `craftseeker`.`reportsoftheworkers` (
  `workerReportId` INT NOT NULL AUTO_INCREMENT,
  `clientId` INT NOT NULL,
  `workersId` INT NOT NULL,
  `workerReportingClientTitle` VARCHAR(255) NOT NULL,
  `workerReportingClientBody` LONGTEXT NOT NULL,
  `workerReportDate` DATETIME NOT NULL,
  PRIMARY KEY (`workerReportId`),
  INDEX `clientId` (`clientId` ASC) VISIBLE,
  INDEX `workersId` (`workersId` ASC) VISIBLE,
  CONSTRAINT `reportsoftheworkers_ibfk_1`
    FOREIGN KEY (`clientId`)
    REFERENCES `craftseeker`.`clients` (`clientId`),
  CONSTRAINT `reportsoftheworkers_ibfk_2`
    FOREIGN KEY (`workersId`)
    REFERENCES `craftseeker`.`workers` (`workersId`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `craftseeker`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `craftseeker`.`reviews` (
  `reviewId` INT NOT NULL AUTO_INCREMENT,
  `clients_clientId` INT NOT NULL,
  `workers_workersId` INT NOT NULL,
  `reviewText` LONGTEXT NOT NULL,
  `reviewDate` DATETIME NOT NULL,
  PRIMARY KEY (`reviewId`),
  INDEX `clients_clientId` (`clients_clientId` ASC) VISIBLE,
  INDEX `workers_workersId` (`workers_workersId` ASC) VISIBLE,
  CONSTRAINT `reviews_ibfk_1`
    FOREIGN KEY (`clients_clientId`)
    REFERENCES `craftseeker`.`clients` (`clientId`),
  CONSTRAINT `reviews_ibfk_2`
    FOREIGN KEY (`workers_workersId`)
    REFERENCES `craftseeker`.`workers` (`workersId`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `craftseeker`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `craftseeker`.`tasks` (
  `taskId` INT NOT NULL AUTO_INCREMENT,
  `clients_clientId` INT NOT NULL,
  `workers_workersId` INT NOT NULL,
  `taskTitle` VARCHAR(255) NOT NULL,
  `taskText` LONGTEXT NOT NULL,
  `taskDate` DATETIME NOT NULL,
  PRIMARY KEY (`taskId`),
  INDEX `clients_clientId` (`clients_clientId` ASC) VISIBLE,
  INDEX `workers_workersId` (`workers_workersId` ASC) VISIBLE,
  CONSTRAINT `tasks_ibfk_1`
    FOREIGN KEY (`clients_clientId`)
    REFERENCES `craftseeker`.`clients` (`clientId`),
  CONSTRAINT `tasks_ibfk_2`
    FOREIGN KEY (`workers_workersId`)
    REFERENCES `craftseeker`.`workers` (`workersId`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

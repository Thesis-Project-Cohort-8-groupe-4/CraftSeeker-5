-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema carftseeker
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema carftseeker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `carftseeker` DEFAULT CHARACTER SET utf8mb3 ;
USE `carftseeker` ;

-- -----------------------------------------------------
-- Table `carftseeker`.`clients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carftseeker`.`clients` (
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
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `carftseeker`.`workers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carftseeker`.`workers` (
  `workersId` INT NOT NULL AUTO_INCREMENT,
  `workerFirstName` VARCHAR(45) NOT NULL,
  `workerLastName` VARCHAR(45) NOT NULL,
  `workerAdress` VARCHAR(45) NOT NULL,
  `workerEmail` VARCHAR(45) NOT NULL,
  `workerCategory` VARCHAR(45) NOT NULL,
  `workerDateOfBirth` VARCHAR(45) NOT NULL,
  `workerYearsOfExperience` INT NOT NULL,
  `workerRating` INT NOT NULL,
  `workerPhoneNumber` VARCHAR(45) NOT NULL,
  `workerNumberOfJobs` INT NOT NULL,
  `workerAvailabillity` TINYINT NOT NULL,
  `workerNumberOfRates` INT NOT NULL,
  `workerTotalOfRates` INT NOT NULL,
  PRIMARY KEY (`workersId`),
  UNIQUE INDEX `workersId_UNIQUE` (`workersId` ASC) VISIBLE,
  UNIQUE INDEX `workerEmail_UNIQUE` (`workerEmail` ASC) VISIBLE,
  UNIQUE INDEX `workerPhoneNumber_UNIQUE` (`workerPhoneNumber` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `carftseeker`.`tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carftseeker`.`tasks` (
  `taskWorker` INT NOT NULL,
  `taskClient` INT NOT NULL,
  `taskName` VARCHAR(45) NOT NULL,
  `taskDescription` LONGTEXT NOT NULL,
  `taskStatus` VARCHAR(45) NOT NULL,
  `taskStart` DATE NOT NULL,
  `tastFinish` DATE NOT NULL,
  PRIMARY KEY (`taskWorker`, `taskClient`),
  INDEX `fk_workers_has_clients_clients1_idx` (`taskClient` ASC) VISIBLE,
  INDEX `fk_workers_has_clients_workers_idx` (`taskWorker` ASC) VISIBLE,
  CONSTRAINT `fk_workers_has_clients_clients1`
    FOREIGN KEY (`taskClient`)
    REFERENCES `carftseeker`.`clients` (`clientId`),
  CONSTRAINT `fk_workers_has_clients_workers`
    FOREIGN KEY (`taskWorker`)
    REFERENCES `carftseeker`.`workers` (`workersId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `carftseeker`.`reports`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carftseeker`.`reports` (
  `clientId` INT NOT NULL,
  `workersId` INT NOT NULL,
  `workerReportingClientTitle` VARCHAR(45) NOT NULL,
  `workerReportingClientBody` LONGTEXT NOT NULL,
  `clientReportingWorkerTitle` VARCHAR(45) NOT NULL,
  `clientReportingWorkerBody` VARCHAR(45) NULL,
  PRIMARY KEY (`clientId`, `workersId`),
  INDEX `fk_clients_has_workers_workers1_idx` (`workersId` ASC) VISIBLE,
  INDEX `fk_clients_has_workers_clients1_idx` (`clientId` ASC) VISIBLE,
  CONSTRAINT `fk_clients_has_workers_clients1`
    FOREIGN KEY (`clientId`)
    REFERENCES `carftseeker`.`clients` (`clientId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clients_has_workers_workers1`
    FOREIGN KEY (`workersId`)
    REFERENCES `carftseeker`.`workers` (`workersId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `carftseeker`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `carftseeker`.`reviews` (
  `clients_clientId` INT NOT NULL,
  `workers_workersId` INT NOT NULL,
  `reviewText` LONGTEXT NOT NULL,
  PRIMARY KEY (`clients_clientId`, `workers_workersId`),
  INDEX `fk_clients_has_workers_workers2_idx` (`workers_workersId` ASC) VISIBLE,
  INDEX `fk_clients_has_workers_clients2_idx` (`clients_clientId` ASC) VISIBLE,
  CONSTRAINT `fk_clients_has_workers_clients2`
    FOREIGN KEY (`clients_clientId`)
    REFERENCES `carftseeker`.`clients` (`clientId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clients_has_workers_workers2`
    FOREIGN KEY (`workers_workersId`)
    REFERENCES `carftseeker`.`workers` (`workersId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

USE [master]
GO
/****** Object:  Database [RecipeDb1]    Script Date: 19-03-2025 20:32:59 ******/
CREATE DATABASE [RecipeDb1]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'RecipeDb1', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\RecipeDb1.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'RecipeDb1_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\RecipeDb1_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [RecipeDb1] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [RecipeDb1].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [RecipeDb1] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [RecipeDb1] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [RecipeDb1] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [RecipeDb1] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [RecipeDb1] SET ARITHABORT OFF 
GO
ALTER DATABASE [RecipeDb1] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [RecipeDb1] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [RecipeDb1] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [RecipeDb1] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [RecipeDb1] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [RecipeDb1] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [RecipeDb1] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [RecipeDb1] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [RecipeDb1] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [RecipeDb1] SET  ENABLE_BROKER 
GO
ALTER DATABASE [RecipeDb1] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [RecipeDb1] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [RecipeDb1] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [RecipeDb1] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [RecipeDb1] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [RecipeDb1] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [RecipeDb1] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [RecipeDb1] SET RECOVERY FULL 
GO
ALTER DATABASE [RecipeDb1] SET  MULTI_USER 
GO
ALTER DATABASE [RecipeDb1] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [RecipeDb1] SET DB_CHAINING OFF 
GO
ALTER DATABASE [RecipeDb1] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [RecipeDb1] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [RecipeDb1] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [RecipeDb1] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'RecipeDb1', N'ON'
GO
ALTER DATABASE [RecipeDb1] SET QUERY_STORE = ON
GO
ALTER DATABASE [RecipeDb1] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [RecipeDb1]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 19-03-2025 20:32:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Recipes]    Script Date: 19-03-2025 20:32:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Recipes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Ingredients] [nvarchar](max) NOT NULL,
	[Instructions] [nvarchar](max) NOT NULL,
	[Category] [nvarchar](max) NOT NULL,
	[ImageUrl] [nvarchar](max) NOT NULL,
	[UserId] [int] NULL,
 CONSTRAINT [PK_Recipes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 19-03-2025 20:32:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Firstname] [nvarchar](max) NOT NULL,
	[Lastname] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[Phone] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250316162100_user', N'6.0.36')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250316162211_recipe', N'6.0.36')
GO
SET IDENTITY_INSERT [dbo].[Recipes] ON 

INSERT [dbo].[Recipes] ([Id], [Name], [Ingredients], [Instructions], [Category], [ImageUrl], [UserId]) VALUES (2, N'Masala Paneer Fry', N'paneer,
oil,
cumin seeds,
tomato,
turmeric powder,
red chili powder,
garam masala,
Salt to taste,
Coriander leaves ', N'Add paneer to a mixing bowl, Sprinkle chaat masala, garam masala and red chili powder. ', N'Veg', N'', 4)
INSERT [dbo].[Recipes] ([Id], [Name], [Ingredients], [Instructions], [Category], [ImageUrl], [UserId]) VALUES (3, N'Dahi Vada', N'Urad dal,  Curd,  Milk, Sweet chutney, Coriander leaves ,Red chilli powder, 
Chaat masala, 
Salt,
Ginger
,Green chilli', N'Soak & Grind,
Fry Vadas,
Soak in Water,
Prepare Yogurt,
Assemble,
Garnish & Serve', N'North Indian Famous Food', N'', 2)
INSERT [dbo].[Recipes] ([Id], [Name], [Ingredients], [Instructions], [Category], [ImageUrl], [UserId]) VALUES (4, N'Maggi noodles', N' 1 packet Maggi noodles,
1 cup water,
1 teaspoon oil (optional),
1 Maggi tastemaker (comes with the packet), Vegetables', N'Boil Water ,
Add Noodles,
Add Tastemaker ,
Cook for 2-3 Minutes ,
Enjoy your delicious Maggi!', N'Fast Food', N'', 5)
SET IDENTITY_INSERT [dbo].[Recipes] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [Password], [Phone]) VALUES (1, N'sudipta', N'roy', N's123@gmail.com', N'st123', 1234569012)
INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [Password], [Phone]) VALUES (2, N'Ram', N'Sen', N'r123@gmail.com', N'1234', 12345678)
INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [Password], [Phone]) VALUES (3, N'ram', N'roy', N'r123@gmail.com', N'r123', 12345678)
INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [Password], [Phone]) VALUES (4, N'Ram', N'sen', N'rs123@gmail.com', N'1234', 1234567)
INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [Password], [Phone]) VALUES (5, N'Rajib', N'Das', N'rd123@gmail.com', N'1234', 123456789)
INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [Password], [Phone]) VALUES (6, N'Sudipta', N'Roy', N'sroy1@gmail.com', N'111', 12345678)
INSERT [dbo].[Users] ([Id], [Firstname], [Lastname], [Email], [Password], [Phone]) VALUES (7, N'ram', N'sharma', N'r123@gmail.com', N'1234', 456789)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
/****** Object:  Index [IX_Recipes_UserId]    Script Date: 19-03-2025 20:32:59 ******/
CREATE NONCLUSTERED INDEX [IX_Recipes_UserId] ON [dbo].[Recipes]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Recipes]  WITH CHECK ADD  CONSTRAINT [FK_Recipes_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Recipes] CHECK CONSTRAINT [FK_Recipes_Users_UserId]
GO
USE [master]
GO
ALTER DATABASE [RecipeDb1] SET  READ_WRITE 
GO

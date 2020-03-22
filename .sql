    CREATE PROCEDURE [dbo].InsertOrUpdateTable
 @MSSV int,
 @Ma_HP varchar(50),
 @Ma_Lop varchar(50),
 @Ten_Lop nvarchar(255),
 @Thu varchar(50),
 @Loai_Lop varchar(50),
 @Bat_Dau time,
 @Ket_Thuc time,
 @Tin_Chi int,
 @Phong_Hoc varchar(50),
 @Tuan_Hoc varchar(100)
as
begin tran
   update [thong_tin_lop] with (serializable) set [MSSV] = @MSSV, [Ma_HP]=@Ma_HP, [Ma_Lop]=@Ma_Lop, [Ten_Lop] = @Ten_Lop, [Tin_Chi] = @Tin_Chi, [Loai_Lop]=@Loai_Lop, [Bat_Dau]=@Bat_Dau,[Ket_Thuc]=@Ket_Thuc,[Thu]=@Thu,[Phong_Hoc]=@Phong_Hoc,[Tuan_Hoc]= @Tuan_Hoc
   where MSSV =@MSSV and Ma_Lop = @Ma_Lop
   if @@rowcount = 0
   begin
       INSERT INTO [dbo].[thong_tin_lop] ([MSSV], [Ma_HP], [Ma_Lop], [Ten_Lop], [Tin_Chi], [Loai_Lop], [Bat_Dau],[Ket_Thuc],[Thu],[Phong_Hoc],[Tuan_Hoc]) 
    VALUES (@MSSV,@Ma_HP, @Ma_Lop, @Ten_Lop, @Tin_Chi, @Loai_Lop, @Bat_Dau, @Ket_Thuc,@Thu, @Phong_Hoc, @Tuan_Hoc)
   end
commit tran
GO;

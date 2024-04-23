const { faker } = require('@faker-js/faker');

// Define interface UploadFolder
const UploadFolder = () => ({
    Id: faker.number.int() ,
    Id_Parent: faker.number.int() ,
    Name: faker.lorem.word(),
    IsHidden: faker.datatype.boolean(),
    CanBeDeleted: faker.datatype.boolean(),
    Idate: faker.date.past(),
    Iuser: faker.number.int() ,
    Udate: faker.date.recent(),
    Uuser: faker.number.int() ,
    Ddate: faker.date.recent(),
    Duser: faker.number.int() 
});

// Define interface UploadImage
const UploadImage = () => ({
    Id: faker.number.int() ,
    Id_Folder: faker.number.int() ,
    Name: faker.lorem.word(),
    OriginImageUrl: faker.image.imageUrl(),
    MediumImageUrl: faker.image.imageUrl(),
    SmallImageUrl: faker.image.imageUrl(),
    CanBeDeleted: faker.datatype.boolean(),
    Idate: faker.date.past(),
    Iuser: faker.number.int() ,
    Udate: faker.date.recent(),
    Uuser: faker.number.int() ,
    Ddate: faker.date.recent(),
    Duser: faker.number.int() 
});

// Define interface Tags
const Tags = () => ({
    Id: faker.number.int() ,
    Designation: faker.lorem.word(),
    Color: faker.internet.color(),
    Idate: faker.date.past(),
    Iuser: faker.number.int() ,
    Udate: faker.date.recent(),
    Uuser: faker.number.int() ,
    Ddate: faker.date.recent(),
    Duser: faker.number.int() 
});

// Define interface GeneralCodeTva
const GeneralCodeTva = () => ({
    Id: faker.number.int() ,
    Taux: faker.datatype.float(),
    Idate: faker.date.past(),
    Iuser: faker.number.int() ,
    Udate: faker.date.recent(),
    Uuser: faker.number.int() ,
    Ddate: faker.date.recent(),
    Duser: faker.number.int() 
});

// Define interface Family
const Family = () => ({
    Id_Family: faker.number.int() ,
    Name: faker.lorem.word(),
    Id_Sub_Family: faker.number.int() ,
    CanBeDeleted: faker.datatype.boolean(),
    Idate: faker.date.past(),
    Iuser: faker.number.int() ,
    Udate: faker.date.recent(),
    Uuser: faker.number.int() ,
    Ddate: faker.date.recent(),
    Duser: faker.number.int() 
});

// Define interface ArticleAllergen
const ArticleAllergen = () => ({
    Id: faker.number.int() ,
    Designation: faker.lorem.word(),
    Id_Image_Upload: faker.number.int() ,
    Idate: faker.date.past(),
    Iuser: faker.number.int() ,
    Udate: faker.date.recent(),
    Uuser: faker.number.int() ,
    Ddate: faker.date.recent(),
    Duser: faker.number.int() 
});

// Define interface Article
const Article = () => ({
    Id: faker.number.int() ,
    Name: faker.lorem.word(),
    Description: faker.lorem.words(),
    Show_Name_Description: faker.datatype.boolean(),
    Display_Second_Screen: faker.datatype.boolean(),
    Display_Caisse_Image: faker.datatype.boolean(),
    Id_Family: faker.number.int() ,
    Id_Sub_Family: faker.number.int() ,
    IsIngredient: faker.datatype.boolean(),
    Id_Image_Upload: faker.number.int() ,
    Visible: faker.datatype.boolean(),
    Price_On_Site: faker.datatype.float(),
    Id_Tva_On_Site: faker.number.int() ,
    Price_Emporter: faker.datatype.float(),
    Id_Tva_Emporter: faker.number.int() ,
    Price_Delivery: faker.datatype.float(),
    Id_Tva_Delivery: faker.number.int() ,
    Kitchen_Note: faker.lorem.sentence(),
    Display_Total_Qte_ToPrepare: faker.datatype.boolean(),
    General_FrColor_Name_And_Description: faker.internet.color(),
    General_BckColor: faker.internet.color(),
    Caisse_FrColor_Name: faker.internet.color(),
    Kitchen_BckColor_Total_Qte: faker.internet.color(),
    Idate: faker.date.past(),
    Iuser: faker.number.int() ,
    Udate: faker.date.recent(),
    Uuser: faker.number.int() ,
    Ddate: faker.date.recent(),
    Duser: faker.number.int() 
});

// Define interface Badges
const Badges = () => ({
    Id: faker.number.int() ,
    Libelle_Badge: faker.lorem.word(),
    Id_Image_Upload: faker.number.int() ,
    Idate: faker.date.past(),
    Iuser: faker.number.int() ,
    Udate: faker.date.recent(),
    Uuser: faker.number.int() ,
    Ddate: faker.date.recent(),
    Duser: faker.number.int() 
});

module.exports = {
    UploadFolder,
    UploadImage,
    Tags,
    GeneralCodeTva,
    Family,
    ArticleAllergen,
    Article,
    Badges
};

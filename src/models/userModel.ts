import { AutoIncrement, PrimaryKey, Table, DataType, Column, Model } from "sequelize-typescript"

@Table({
    tableName: "users",
    timestamps: false
})

export default class UserModel extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),
        allowNull:false
    })
    name!: string;
    
    @Column({
        type: DataType.STRING(200),
        allowNull:false
    })
    email!: string;

    @Column({
        type: DataType.STRING(200),
        allowNull:false
    })
    password!: string;

    
}
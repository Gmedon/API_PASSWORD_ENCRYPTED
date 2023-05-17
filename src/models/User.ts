import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql'

export interface TodoInstance extends Model {
    id: number;
    email: string;
    password: string;
}

export const User = sequelize.define<TodoInstance>('auth', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'users',
    timestamps: false
});
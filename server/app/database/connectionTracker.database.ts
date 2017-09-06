
/*
* This example store the connections in the database
*/

//https://www.npmjs.com/package/mongodb
import * as mongo from 'mongodb';
import * as assert from 'assert';
import { connection } from './interfaces/connection.interface';

export class ConnectionTracker
{
    private readonly URL = "mongodb://localhost:27017/connection_log";
    
    public connectDB() : mongo.Db
    {
        let database;
        mongo.MongoClient.connect(this.URL, function(err, db){
            assert.equal(null, err);
            console.log("DB connected");
            database = db;
        });
        return database;
    }

    public disconnectDB(db : mongo.Db)
    {
        db.close();
    }

    public storeConnection(connection: connection)
    {
       /*let db = this.connectDB();
       db.collection('connectionLog').insert(connection);
       this.disconnectDB(db);*/
       mongo.MongoClient.connect(this.URL, function(err, db){
        assert.equal(null, err);
        console.log("DB connected");
        db.collection("connection_log").insert(connection);
    });
    }
}
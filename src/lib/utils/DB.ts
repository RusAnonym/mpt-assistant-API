import mongoose from "mongoose";

import * as schemes from "./DB/schemes";
import { typedModel } from "ts-mongoose";

class DB {
	public connection: mongoose.Connection;

	constructor({
		url,
		login,
		password,
		database,
	}: {
		url: string;
		login: string;
		password: string;
		database: string;
	}) {
		this.connection = mongoose.createConnection(
			`mongodb+srv://${login}:${password}@${url}/${database}`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			},
		);
	}
}

export class API_DB extends DB {
	constructor(config: {
		url: string;
		login: string;
		password: string;
		database: string;
	}) {
		super(config);
	}

	public models = {
		group: typedModel(
			"group",
			schemes.GroupSchema,
			"groups",
			undefined,
			undefined,
			this.connection,
		),

		specialty: typedModel(
			"specialty",
			schemes.SpecialtySchema,
			"specialties",
			undefined,
			undefined,
			this.connection,
		),

		replacement: typedModel(
			"replacement",
			schemes.ReplacementSchema,
			"replacements",
			undefined,
			undefined,
			this.connection,
		),

		dump: typedModel(
			"dump",
			schemes.DumpSchema,
			"dumps",
			undefined,
			undefined,
			this.connection,
		),
	};
}

export class VK_Bot_DB extends DB {
	constructor(config: {
		url: string;
		login: string;
		password: string;
		database: string;
	}) {
		super(config);
	}

	public models = {
		user: typedModel(
			"user",
			schemes.UserSchema,
			"users",
			undefined,
			undefined,
			this.connection,
		),

		chat: typedModel(
			"chat",
			schemes.ChatSchema,
			"chats",
			undefined,
			undefined,
			this.connection,
		),
	};
}

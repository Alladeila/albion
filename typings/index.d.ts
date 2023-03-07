export class Alliance {
    public name: string;
    public id: string;
    public tag: string;
    public memberCount: number;
    public founded: Date;
}

export class Guild {
    public name: string;
    public id: string;
    public alliance: Alliance | null;
    public memberCount: number;
    public founded: Date;
}

export class Player {
    public name: string;
    public id: string;
    public guild: Guild | null;
    public alliance: Alliance | null;
    public avatar: PlayerAvatar;
}

export class PlayerAvatar {
    public code: string;
    public ringCode: string;
}

export declare function getPlayerByName (name: string): Promise<Player | null>;
export declare function getPlayerById (id: string): Promise<Player | null>;
export declare function getGuildByName (name: string): Promise<Guild | null>;
export declare function getGuildById (id: string): Promise<Guild | null>;
export declare function getAllianceById (id: string): Promise<Alliance | null>;
export default class GenericGlass {
    constructor(id, glasstype, id_app, id_veras, thickness, white_glass, sound, weight, resistance, uv_protection, application, layers) {
        this.id = id;
        this.glasstype = glasstype;
        this.id_app = id_app;
        this.id_veras = id_veras;
        this.thickness = parseFloat(thickness);
        this.white_glass = white_glass;
        this.sound = parseFloat(sound);
        this.weight = parseFloat(weight);
        this.resistance = resistance;
        this.uv_protection = uv_protection;
        this.application = application;
        this.layers = layers? JSON.parse(layers) : (white_glass === "Yes"? [this.thickness+":1"] : [this.thickness+":0"]);
	}
}


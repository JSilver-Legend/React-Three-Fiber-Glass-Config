export default class FireResistentGlass {
  constructor(id, glasstype, id_app, id_veras, klasse, thickness, white_glass, uv_protection, application, structure, manufacturer, u_value, sound, weight, butt_joints, miter, resistance, max_width, max_height, order, layers) {
  	this.id = id;
  	this.glasstype = glasstype;
  	this.id_app = id_app;
  	this.id_veras = id_veras;
  	this.klasse = klasse;
    this.thickness = parseFloat(thickness);
  	this.white_glass = white_glass;
    this.uv_protection = uv_protection;
  	this.application = application;
    this.structure = structure;
  	this.manufacturer = manufacturer;
		this.u_value = parseFloat(u_value);
    this.sound = parseFloat(sound);
		this.weight = parseFloat(weight);
		this.butt_joints = butt_joints;
    this.miter = miter;
		this.resistance = resistance;
		this.max_width = parseFloat(max_width);
		this.max_height = parseFloat(max_height);
    this.order = order;
    this.layers = layers? JSON.parse(layers) : (white_glass === "Yes"? [this.thickness+":1"] : [this.thickness+":0"]);
  }
}


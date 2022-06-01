import {Initializer as $6zb6q$Initializer, Debug as $6zb6q$Debug, ResourceContainer as $6zb6q$ResourceContainer, RenderLoop as $6zb6q$RenderLoop, Graphics as $6zb6q$Graphics, Configuration as $6zb6q$Configuration, EventManager as $6zb6q$EventManager, ResourceBatch as $1b60c8aa223510725e1f9c6717734ae0$re_export$ResourceBatch, BaseApplication as $6zb6q$BaseApplication, ViewManager as $6zb6q$ViewManager, ApplicationView as $6zb6q$ApplicationView, Time as $6zb6q$Time, SceneManager as $6zb6q$SceneManager, CameraManager as $6zb6q$CameraManager, NormalRender as $6zb6q$NormalRender, PerspectiveCamera as $6zb6q$PerspectiveCamera, Screen as $6zb6q$Screen, OrthographicFrustumPointFitter as $6zb6q$OrthographicFrustumPointFitter, PerspectiveFrustumPointFitter as $6zb6q$PerspectiveFrustumPointFitter, MathUtilities as $6zb6q$MathUtilities, Input as $6zb6q$Input, CameraUtilities as $6zb6q$CameraUtilities, BaseShaderMaterial as $6zb6q$BaseShaderMaterial} from "ohzi-core";
import {Mesh as $6zb6q$Mesh, OrthographicCamera as $6zb6q$OrthographicCamera, Math as $6zb6q$Math, Scene as $6zb6q$Scene, sRGBEncoding as $6zb6q$sRGBEncoding, MirroredRepeatWrapping as $6zb6q$MirroredRepeatWrapping, ACESFilmicToneMapping as $6zb6q$ACESFilmicToneMapping, PlaneGeometry as $6zb6q$PlaneGeometry, ShadowMaterial as $6zb6q$ShadowMaterial, CubeRefractionMapping as $6zb6q$CubeRefractionMapping, VSMShadowMap as $6zb6q$VSMShadowMap, RepeatWrapping as $6zb6q$RepeatWrapping, AmbientLight as $6zb6q$AmbientLight, Color as $6zb6q$Color, Fog as $6zb6q$Fog, Object3D as $6zb6q$Object3D, DirectionalLight as $6zb6q$DirectionalLight, SpotLight as $6zb6q$SpotLight, Ray as $6zb6q$Ray, Quaternion as $6zb6q$Quaternion, Plane as $6zb6q$Plane, Box3 as $6zb6q$Box3, Sphere as $6zb6q$Sphere, Vector3 as $6zb6q$Vector3, PlaneHelper as $6zb6q$PlaneHelper, Vector2 as $6zb6q$Vector2, WebGLRenderTarget as $6zb6q$WebGLRenderTarget, HalfFloatType as $6zb6q$HalfFloatType, Shape as $6zb6q$Shape, ExtrudeGeometry as $6zb6q$ExtrudeGeometry, BackSide as $6zb6q$BackSide, MeshBasicMaterial as $6zb6q$MeshBasicMaterial, BoxGeometry as $6zb6q$BoxGeometry, FrontSide as $6zb6q$FrontSide, RGBFormat as $6zb6q$RGBFormat, DataTexture as $6zb6q$DataTexture, DoubleSide as $6zb6q$DoubleSide, MeshPhysicalMaterial as $6zb6q$MeshPhysicalMaterial, BufferGeometry as $6zb6q$BufferGeometry, Sprite as $6zb6q$Sprite, SpriteMaterial as $6zb6q$SpriteMaterial, Line as $6zb6q$Line, LineDashedMaterial as $6zb6q$LineDashedMaterial, Float32BufferAttribute as $6zb6q$Float32BufferAttribute, UniformsUtils as $6zb6q$UniformsUtils, ShaderMaterial as $6zb6q$ShaderMaterial, MathUtils as $6zb6q$MathUtils} from "three";
import * as $6zb6q$statsjs from "stats-js";
import {GUI as $6zb6q$GUI} from "dat.gui";
import {BufferGeometryUtils as $6zb6q$BufferGeometryUtils} from "three/examples/jsm/utils/BufferGeometryUtils.js";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}












const $8f99d40885972ccfdaaf2c54f6997ca3$export$b15ac3e9f78edd48 = {
    INITIAL: 'initial',
    LOADER: 'loader',
    HOME: 'home'
};
const $8f99d40885972ccfdaaf2c54f6997ca3$export$bd738b3d3044d10 = {
    INITIAL: '/initial',
    LOADER: '/loader',
    HOME: '/'
};


class $7b07040eb6262c52862cf0cbf477a75a$export$9099ad97b570f7c extends $6zb6q$ApplicationView {
    constructor(){
        super({
            name: $8f99d40885972ccfdaaf2c54f6997ca3$export$b15ac3e9f78edd48.INITIAL,
            url: $8f99d40885972ccfdaaf2c54f6997ca3$export$bd738b3d3044d10.INITIAL,
            container: undefined
        });
    }
    show() {
    }
    on_enter() {
    }
    on_exit() {
    }
    hide() {
    }
    update(global_view_data) {
    }
}












class $564555e64102cab5876b453a939c8e0f$var$FPSCounter {
    constructor(){
        this.last_loop = undefined;
        this.count = 1;
        this.total = 1;
        this.fps = 60;
        this.fps_samples = [
            60,
            60,
            60,
            60,
            60
        ];
    }
    update() {
        this.count_fps();
    }
    count_fps() {
        this.last_loop = this.last_loop ? this.last_loop : Math.floor($6zb6q$Time.elapsed_time);
        const current_loop = Math.floor($6zb6q$Time.elapsed_time);
        if (this.last_loop < current_loop) {
            this.fps = this.count;
            this.count = 1;
            this.last_loop = current_loop;
            this.fps_samples.shift();
            this.fps_samples.push(this.fps);
        } else {
            this.count += 1;
            this.total += 1;
        }
    }
    get avg() {
        let fpss = 0;
        for(let i = 0; i < this.fps_samples.length; i++)fpss += this.fps_samples[i];
        return fpss / this.fps_samples.length;
    }
}
var $564555e64102cab5876b453a939c8e0f$export$9099ad97b570f7c = new $564555e64102cab5876b453a939c8e0f$var$FPSCounter();


class $c0234630faa768f6a5c90aa63dfe412f$export$9099ad97b570f7c extends $6zb6q$ApplicationView {
    constructor(api){
        super({
            name: $8f99d40885972ccfdaaf2c54f6997ca3$export$b15ac3e9f78edd48.LOADER,
            url: $8f99d40885972ccfdaaf2c54f6997ca3$export$bd738b3d3044d10.LOADER,
            container: document.querySelector('.loader')
        });
        this.api = api;
        this.is_assets_ready = false;
        this.is_api_ready = false;
        this.current_progress = 0;
        this.target_progress = 0;
        this.compilation_index = 0;
        this.texture_initialized = false;
        this.ao_initialized = false;
        this.mesh_compiled = false;
        this.compilation_t = 0;
        this.performance_t = 0;
        this.objects = [];
    }
    start() {
        // SceneController.on_loader_loaded();
        this.progress_bar = document.querySelector('.loader__progress-bar-fill');
        this.set_progress(0);
    }
    on_enter() {
        super.on_enter();
    }
    on_exit() {
        super.on_exit();
    }
    set_progress(progress) {
        // this.target_progress = this.__round(progress / 3, 1);
        this.target_progress = this.__round(progress, 2);
    }
    set_api_ready(is_api_ready) {
        this.is_api_ready = is_api_ready;
    }
    on_assets_ready() {
        // Optionally compile objects during loading
        // this.objects = ?
        this.is_assets_ready = true;
    }
    update_progress() {
        // this.progress = this.target_progress + this.round((transition_progress / 3) * 2, 2);
        this.current_progress += (this.target_progress - this.current_progress) * 0.05;
        this.progress_bar.style.transform = `translate3d(${this.current_progress * 100}%,0,0)`;
    }
    update() {
        this.update_progress();
        this.__compile_objects();
        if (this.is_api_ready) this.api.start_main_app();
    }
    update_transition(global_view_data, transition_progress) {
        // this.set_opacity(global_view_data.loader_opacity);
        this.update_progress();
        this.__compile_objects();
        this.__check_performance();
    }
    __check_performance() {
        if (this.performance_t > 5 && $564555e64102cab5876b453a939c8e0f$export$9099ad97b570f7c.avg < 40) {
            $6zb6q$Configuration.dpr -= 0.25;
            $6zb6q$Configuration.dpr = $6zb6q$Math.clamp($6zb6q$Configuration.dpr, 0.75, 10);
            this.performance_t = 0;
        }
        this.performance_t += $6zb6q$Time.delta_time;
    }
    __compile_objects() {
        if (this.is_assets_ready) {
            let scene = new $6zb6q$Scene();
            this.compilation_t += $6zb6q$Time.delta_time;
            if (this.compilation_t >= 0 && this.compilation_index < this.objects.length) {
                scene.add(new $6zb6q$Mesh(this.objects[this.compilation_index].geometry, this.objects[this.compilation_index].material));
                this.compilation_t = 0;
                // 3: Shaders
                if (!this.mesh_compiled && this.ao_initialized) {
                    $6zb6q$Graphics._renderer.compile(scene, new $6zb6q$OrthographicCamera(-1000, 1000, 1000, -1000, -1000, 1000));
                    this.mesh_compiled = true;
                }
                // 2: Ambient Occlusion
                if (!this.ao_initialized && this.texture_initialized) // Graphics._renderer.initTexture(this.objects[this.compilation_index].material.aoMap);
                this.ao_initialized = true;
                // 1: Emissive map
                if (!this.texture_initialized) {
                    if (this.objects[this.compilation_index].material.emissiveMap) $6zb6q$Graphics._renderer.initTexture(this.objects[this.compilation_index].material.emissiveMap);
                    this.texture_initialized = true;
                }
                scene.remove(this.objects[this.compilation_index]);
                if (this.texture_initialized && this.ao_initialized && this.mesh_compiled) {
                    this.compilation_index++;
                    this.texture_initialized = false;
                    this.ao_initialized = false;
                    this.mesh_compiled = false;
                }
            } else this.set_api_ready(true);
        }
    }
    __round(value, precision) {
        let multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
}


class $9d642608df1661374f06f1f0b35095a9$export$9099ad97b570f7c extends $6zb6q$BaseApplication {
    constructor(api){
        super();
        this.loader_view = undefined;
        this.second_step = false;
        this.api = api;
    }
    load() {
        let batch = new $1b60c8aa223510725e1f9c6717734ae0$re_export$ResourceBatch();
        batch.load($6zb6q$ResourceContainer);
        this.check_resource_loading(batch, this.on_loader_ready.bind(this), 10);
    }
    on_enter() {
        this.loader_view.start();
    }
    on_loader_ready() {
        this.second_step = true;
        // let config = ResourceContainer.get_resource('config');
        $6zb6q$ViewManager.set_initial_state_data({
        });
        this.initial_view = new $7b07040eb6262c52862cf0cbf477a75a$export$9099ad97b570f7c();
        this.loader_view = new $c0234630faa768f6a5c90aa63dfe412f$export$9099ad97b570f7c(this.api);
        $6zb6q$ViewManager.set_view(this.initial_view.name);
        $6zb6q$ViewManager.go_to_view(this.loader_view.name, false);
        // Start render loop
        this.api.start();
        let batch = new $1b60c8aa223510725e1f9c6717734ae0$re_export$ResourceBatch();
        batch.add_cubemap('cube', 'textures/cube/', 8000);
        batch.add_cubemap('cube-blur', 'textures/cube-blur/', 8000);
        batch.add_texture('noise', 'textures/noise.png', 1000);
        batch.add_texture('alu-specular', 'textures/alu/specular.jpg', 1000);
        batch.add_texture('alu-normal', 'textures/alu/normal.jpg', 1000);
        batch.add_texture('alu-diffuse', 'textures/alu/diffuse.jpg', 1000);
        batch.add_texture('styrofoam-diffuse3', 'textures/styrofoam/diffuse3-2.png', 1000);
        // batch.add_texture('sun', 'textures/sun.png', 1000);
        batch.add_texture('sun', 'textures/sun-lines.png', 1000);
        batch.add_texture('blured_circle', 'textures/blured_circle.png', 1000);
        batch.load($6zb6q$ResourceContainer);
        this.check_resource_loading(batch, this.on_assets_ready.bind(this), 10);
    }
    on_assets_ready() {
        this.loader_view.on_assets_ready();
    }
    check_resource_loading(batch, on_resources_loaded, timeout) {
        // console.log(batch.get_progress(), batch.get_loaded_bytes(), batch.get_total_bytes());
        if (this.second_step) this.loader_view.set_progress(batch.get_progress());
        if (batch.loading_finished) {
            if (batch.has_errors) batch.print_errors();
            else on_resources_loaded();
        } else setTimeout((function() {
            this.check_resource_loading(batch, on_resources_loaded);
        }).bind(this), timeout);
    }
    update() {
    // SceneController.update();
    }
}










class $da9f8d958126ded167e046e3e193cbd8$var$DatGUI {
    constructor(){
        this.dat_gui = undefined;
        this.settings = {
            scale: 0.8,
            refractionIndex: 1.00125,
            dispersion: 0.005,
            opacity: 0.06,
            roughness: 0.98,
            fesnel: 0.08,
            color: 14737632,
            floor_shadow_opacity: 0.04,
            refractionRatio: 0.98,
            roughness: 0,
            metalness: 1,
            reflectivity: 0.95,
            clearcoat: 1,
            clearcoatRoughness: 0.4,
            turbidity: 0.5,
            rayleigh: 0.26,
            mieCoefficient: 0.002,
            mieDirectionalG: 0.72,
            elevation: 80,
            azimuth: 8.4,
            exposure: 1
        };
    }
    init() {
        document.addEventListener('keydown', (event)=>{
            if (event.shiftKey && event.key === 'K') document.querySelector('.dg.ac').classList.toggle('hidden');
        });
    }
    start() {
        this.dat_gui = new $6zb6q$GUI();
        this.dat_gui.close();
        document.querySelector('.dg.ac').style['z-index'] = 999;
        document.querySelector('.dg.ac').classList.add('hidden');
        this.dat_gui.add(this.settings, 'scale', 0.1, 2);
        this.dat_gui.add(this.settings, 'refractionIndex').min(-1).max(2).step(0.0025);
        this.dat_gui.add(this.settings, 'dispersion').min(-1).max(2).step(0.0025);
        this.dat_gui.add(this.settings, 'roughness').min(0.3).max(1).step(0.0025);
        this.dat_gui.add(this.settings, 'opacity').min(0).max(1).step(0.01);
        this.dat_gui.add(this.settings, 'fesnel').min(0).max(0.5).step(0.01);
        this.dat_gui.add(this.settings, 'floor_shadow_opacity').min(0).max(1).step(0.01);
        this.dat_gui.addColor(this.settings, 'color');
        this.dat_gui.add(this.settings, 'refractionRatio').min(0).max(1).step(0.01);
        this.dat_gui.add(this.settings, 'roughness').min(0).max(1).step(0.01);
        this.dat_gui.add(this.settings, 'metalness').min(0).max(1).step(0.01);
        this.dat_gui.add(this.settings, 'reflectivity').min(0).max(1).step(0.01);
        this.dat_gui.add(this.settings, 'clearcoat').min(0).max(1).step(0.01);
        this.dat_gui.add(this.settings, 'clearcoatRoughness').min(0).max(1).step(0.01);
        this.dat_gui.add(this.settings, 'turbidity', 0, 20, 0.1);
        this.dat_gui.add(this.settings, 'rayleigh', 0, 4, 0.001);
        this.dat_gui.add(this.settings, 'mieCoefficient', 0, 0.1, 0.001);
        this.dat_gui.add(this.settings, 'mieDirectionalG', 0, 1, 0.001);
        this.dat_gui.add(this.settings, 'elevation', 0, 90, 0.1);
        this.dat_gui.add(this.settings, 'azimuth', -180, 180, 0.1);
        this.dat_gui.add(this.settings, 'exposure', 0, 2, 0.05);
        this.dat_gui.width = 400;
    }
}
var $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c = new $da9f8d958126ded167e046e3e193cbd8$var$DatGUI();

















class $a49f6182d5abc5163819f1d2532ddea5$export$9099ad97b570f7c {
    constructor(){
    }
    on_enter(camera_controller) {
    }
    on_exit(camera_controller) {
    }
    update(TIME, camera_controller) {
    }
}


class $06a4612fc53bb931dda0ceec4d20c45d$export$9099ad97b570f7c {
    constructor(){
    }
    on_enter(camera_controller) {
    }
    on_exit(camera_controller) {
    }
    update(TIME, camera_controller) {
    }
}






class $d672ab54f3cac27878149cbf71f8d334$export$9099ad97b570f7c extends $06a4612fc53bb931dda0ceec4d20c45d$export$9099ad97b570f7c {
    constructor(){
        super();
        this.rotation_speed = new $6zb6q$Vector2();
        this.vector_forward_axis = new $6zb6q$Vector3(0, 0, -1);
        this.tmp_forward = new $6zb6q$Vector3();
        this.tmp_quat = new $6zb6q$Quaternion();
        this.tmp_camera_target_pos = new $6zb6q$Vector3();
    }
    on_enter(camera_controller) {
        camera_controller.reference_rotation.copy(camera_controller.camera.quaternion);
    }
    update(camera_controller) {
        camera_controller.camera.quaternion.copy(camera_controller.reference_rotation);
        this.tmp_forward.copy(this.vector_forward_axis);
        let dir = this.tmp_forward.applyQuaternion(camera_controller.camera.quaternion);
        camera_controller.reference_zoom = $6zb6q$Math.clamp(camera_controller.reference_zoom, camera_controller.min_zoom, camera_controller.max_zoom);
        camera_controller.camera.position.copy(camera_controller.reference_position).sub(dir.multiplyScalar(camera_controller.reference_zoom));
        camera_controller.__last_reference_position.copy(camera_controller.reference_position);
    }
    get_target_camera_pos(camera_controller) {
        this.tmp_quat.copy(camera_controller.reference_rotation);
        this.tmp_forward.copy(this.vector_forward_axis);
        let dir = this.tmp_forward.applyQuaternion(this.tmp_quat);
        let zoom = $6zb6q$Math.clamp(camera_controller.reference_zoom, camera_controller.min_zoom, camera_controller.max_zoom);
        this.tmp_camera_target_pos.copy(camera_controller.reference_position).sub(dir.multiplyScalar(zoom));
        return this.tmp_camera_target_pos;
    }
}





















class $127afc1bfc3b1026dcfe23cf6d50d7c5$export$9099ad97b570f7c extends $a49f6182d5abc5163819f1d2532ddea5$export$9099ad97b570f7c {
    constructor(){
        super();
        this.pan_speed = new $6zb6q$Vector2();
        this.zoom_speed = 0;
        this.zoom_t = 0;
        this.tilt_degrees = 70;
        this.tilt_speed = 0;
        this.vector_down_axis = new $6zb6q$Vector3(0, -1, 0);
        this.vector_up_axis = new $6zb6q$Vector3(0, 1, 0);
        this.vector_back_axis = new $6zb6q$Vector3(0, 0, -1);
        this.vector_left_axis = new $6zb6q$Vector3(-1, 0, 0);
        this.tmp_dir = new $6zb6q$Vector3();
        this.tmp_ray = new $6zb6q$Ray();
        this.tmp_intersection = new $6zb6q$Vector3();
        this.tmp_mouse_dir = new $6zb6q$Vector2();
        this.last_NDC = new $6zb6q$Vector2();
        this.rotation_velocity = new $6zb6q$Vector2();
        this.zoom_velocity = 0;
        this.forward_dir = 0;
        this.right_dir = 0;
        window.addEventListener('keydown', this.on_key_down.bind(this), false);
        window.addEventListener('keyup', this.on_key_up.bind(this), false);
    }
    on_enter(camera_controller) {
        this.t_damping = 0;
    }
    on_exit(camera_controller) {
    }
    on_key_down(event) {
        switch(event.key){
            case 'w':
                this.forward_dir = -0.3;
                break;
            case 's':
                this.forward_dir = 0.3;
                break;
            case 'a':
                this.right_dir = -0.3;
                break;
            case 'd':
                this.right_dir = 0.3;
                break;
            case 'Shift':
                this.shift_key = true;
                break;
            default:
                break;
        }
    }
    on_key_up(event) {
        switch(event.key){
            case 'w':
                this.forward_dir = 0;
                break;
            case 's':
                this.forward_dir = 0;
                break;
            case 'a':
                this.right_dir = 0;
                break;
            case 'd':
                this.right_dir = 0;
                break;
            case 'Shift':
                this.shift_key = false;
                break;
            default:
                break;
        }
    }
    update(camera_controller) {
        if (!camera_controller.input_enabled) return;
        // camera_controller.reference_zoom += Input.scroll_delta * 0.5;
        camera_controller.camera.fov += $6zb6q$Input.scroll_delta * 2;
        camera_controller.camera.fov = $6zb6q$Math.clamp(camera_controller.camera.fov, 3, 80);
        if ($6zb6q$Input.left_mouse_button_pressed) this.last_NDC.copy($6zb6q$Input.NDC);
        if ($6zb6q$Input.left_mouse_button_down && $6zb6q$Input.pointer_count === 1) this.rotation_velocity.add(new $6zb6q$Vector2($6zb6q$Input.NDC_delta.x * -16, $6zb6q$Input.NDC_delta.y * -4));
        camera_controller.set_rotation_delta(this.rotation_velocity.x, this.rotation_velocity.y);
        this.rotation_velocity.multiplyScalar(0.9);
        this.last_NDC.copy($6zb6q$Input.NDC);
        camera_controller.translate_forward(this.forward_dir);
        camera_controller.translate_right(this.right_dir);
    }
}


class $896e8a051851bf61593dd4d6a232b656$export$9099ad97b570f7c {
    constructor(){
        this.camera = undefined;
        this.camera_initial_rot = undefined;
        this.camera_initial_pos = undefined;
        this.current_state = new $a49f6182d5abc5163819f1d2532ddea5$export$9099ad97b570f7c();
        this.current_mode = new $d672ab54f3cac27878149cbf71f8d334$export$9099ad97b570f7c();
        this.point_of_interest = new $6zb6q$Vector3();
        this.normalized_zoom = 0;
        this.vector_up_axis = new $6zb6q$Vector3(0, 1, 0);
        this.vector_right_axis = new $6zb6q$Vector3(1, 0, 0);
        this.vector_forward_axis = new $6zb6q$Vector3(0, 0, 1);
        this.tmp_forward = this.vector_forward_axis.clone();
        this.tmp_right = this.vector_right_axis.clone();
        this.tmp_dir = new $6zb6q$Vector3();
        this.zoom = 10;
        this.reference_zoom = 10;
        this.orientation = 27; // degrees
        this.tilt = 70;
        this.reference_rotation = new $6zb6q$Quaternion();
        this.reference_position = new $6zb6q$Vector3();
        this.__last_reference_position = new $6zb6q$Vector3();
        this.tmp_size = new $6zb6q$Vector3();
        this.tmp_quat = new $6zb6q$Quaternion();
        this.min_zoom = 1;
        this.max_zoom = 400;
        this.current_tilt = 0;
        this.current_orientation = 0;
        this.input_enabled = true;
        // this.debug_box = Debug.draw_cube(undefined,15);
        // this.debug_zoom_box = Debug.draw_sphere(undefined,15, 0x00ff00);
        this.projected_points = [];
        for(let i = 0; i < 30; i++)this.projected_points.push($6zb6q$Debug.draw_sphere(undefined, 0.5, 65280));
        this.hide_projected_points();
        this.projection_plane_helper = new $6zb6q$PlaneHelper(new $6zb6q$Plane(), 1, 65280);
        this.projection_plane_helper.visible = false;
        $6zb6q$SceneManager.current.add(this.projection_plane_helper);
        this.projection_sphere_helper = $6zb6q$Debug.draw_sphere_helper(new $6zb6q$Sphere(), 16711680);
        this.projection_sphere_helper.material.transparent = true;
        this.projection_sphere_helper.material.opacity = 0.3;
        this.projection_sphere_helper.visible = false;
    }
    set_camera(camera) {
        this.camera = camera;
        this.camera_initial_rot = camera.quaternion.clone();
        this.camera_initial_pos = camera.position.clone();
    }
    set_state(state) {
        // console.log("camera controller state switch to: " + state.constructor.name);
        this.current_state.on_exit(this);
        this.current_state = state;
        this.current_state.on_enter(this);
    }
    set_mode(mode) {
        // console.log("camera controller mode switch to: " + mode.constructor.name);
        this.current_mode.on_exit(this);
        this.current_mode = mode;
        this.current_mode.on_enter(this);
    }
    set_normalized_zoom(zoom) {
        this.normalized_zoom = $6zb6q$Math.clamp(zoom, 0, 1);
    // EventManager.fire_zoom_changed(this.normalized_zoom);
    }
    update_normalized_zoom(min_zoom, max_zoom) {
        let zoom = this.camera.position.distanceTo(this.reference_position);
        this.normalized_zoom = $6zb6q$MathUtilities.linear_map(zoom, min_zoom, max_zoom, 1, 0);
        this.normalized_zoom = $6zb6q$Math.clamp(this.normalized_zoom, 0, 1);
    // EventManager.fire_zoom_changed(this.normalized_zoom);
    }
    update() {
        if (this.debug_box) this.debug_box.position.copy(this.reference_position);
        // this.debug_zoom_box.position.copy(this.reference_position)
        // this.debug_zoom_box.position.add(new Vector3(0,0,1).applyQuaternion(this.camera.quaternion).multiplyScalar(this.reference_zoom));
        this.current_state.update(this);
        this.current_mode.update(this);
        this.update_normalized_zoom(this.min_zoom, this.max_zoom);
    }
    set_idle() {
        this.set_state(new $a49f6182d5abc5163819f1d2532ddea5$export$9099ad97b570f7c());
    }
    camera_is_zoomed_out() {
        return this.normalized_zoom < 0.2;
    }
    set_standard_mode() {
        this.set_state(new $127afc1bfc3b1026dcfe23cf6d50d7c5$export$9099ad97b570f7c());
    }
    set_rotation(tilt, orientation) {
        this.old_orientation = this.current_orientation;
        this.current_tilt = tilt || this.current_tilt;
        this.current_orientation = orientation || this.current_orientation;
        this.reference_rotation.copy(this.build_rotation(this.current_tilt, this.current_orientation));
    }
    set_tilt(tilt) {
        let new_tilt = new $6zb6q$Quaternion().setFromAxisAngle(this.vector_right_axis, -tilt / 360 * Math.PI * 2);
        let old_tilt = new $6zb6q$Quaternion().setFromAxisAngle(this.vector_right_axis, -this.current_tilt / 360 * Math.PI * 2);
        old_tilt.conjugate();
        this.reference_rotation.multiply(old_tilt).multiply(new_tilt);
        this.current_tilt = tilt;
    }
    set_rotation_delta(delta_x, delta_y) {
        this.current_orientation = (this.current_orientation + delta_x) % 360;
        this.current_tilt += delta_y;
        this.set_rotation(this.current_tilt, this.current_orientation);
    }
    lerp_rotation(from_tilt, to_tilt, from_orientation, to_orientation, t) {
        let raw_orientation = $6zb6q$Math.lerp(from_orientation, to_orientation, t);
        if (Math.abs(to_orientation - from_orientation) > 180) {
            if (from_orientation > 180) from_orientation = from_orientation % 360 - 360;
            if (to_orientation > 180) to_orientation = to_orientation % 360 - 360;
        }
        this.set_rotation($6zb6q$Math.lerp(from_tilt, to_tilt, t), $6zb6q$Math.lerp(from_orientation, to_orientation, t));
        this.current_orientation = raw_orientation;
    }
    build_rotation(tilt, orientation) {
        let new_orientation = new $6zb6q$Quaternion().setFromAxisAngle(this.vector_up_axis, orientation / 360 * Math.PI * 2);
        let new_tilt = new $6zb6q$Quaternion().setFromAxisAngle(this.vector_right_axis, -tilt / 360 * Math.PI * 2);
        return new_orientation.multiply(new_tilt);
    }
    translate_forward(amount) {
        this.tmp_forward.copy(this.vector_forward_axis);
        this.tmp_forward.applyQuaternion(this.camera.quaternion);
        this.tmp_forward.y = 0;
        this.tmp_forward.normalize();
        this.reference_position.add(this.tmp_forward.multiplyScalar(amount));
    }
    translate_right(amount) {
        this.tmp_right.copy(this.vector_right_axis);
        this.tmp_right.applyQuaternion(this.camera.quaternion);
        this.reference_position.add(this.tmp_right.multiplyScalar(amount));
    }
    focus_on_bounding_box(bb, scale = 1) {
        if (this.camera.isOrthographicCamera) {
            bb.getSize(this.tmp_size);
            let obj_x = this.tmp_size.x;
            let obj_y = this.tmp_size.y;
            let object_aspect = obj_x / obj_y;
            if ($6zb6q$Screen.aspect_ratio / object_aspect > 1) this.camera.zoom = $6zb6q$Screen.height / obj_y;
            else this.camera.zoom = $6zb6q$Screen.width / obj_x;
            bb.getCenter(this.reference_position);
        } else {
            let dir = new $6zb6q$Vector3();
            dir.copy(bb.max).sub(bb.min);
            let p1 = bb.min.clone();
            let p2 = p1.clone().add(new $6zb6q$Vector3(dir.x, 0, 0));
            let p3 = p1.clone().add(new $6zb6q$Vector3(0, dir.y, 0));
            let p4 = p1.clone().add(new $6zb6q$Vector3(0, 0, dir.z));
            let p5 = p1.clone().add(new $6zb6q$Vector3(dir.x, 0, dir.z));
            let p6 = p1.clone().add(new $6zb6q$Vector3(0, dir.y, dir.z));
            let p7 = bb.max.clone();
            let p8 = p1.clone().add(new $6zb6q$Vector3(dir.x, dir.y, 0));
            this.focus_camera_on_points([
                p1,
                p2,
                p3,
                p4,
                p5,
                p6,
                p7,
                p8
            ], scale);
        }
    }
    get_zoom_to_focus_on_bounding_box(bb, tilt, orientation) {
        if (tilt !== undefined && orientation !== undefined) {
            this.tmp_quat.copy(this.reference_rotation); // backup quaternion
            this.reference_rotation.copy(this.build_rotation(tilt, orientation));
        }
        let original_zoom = this.reference_zoom;
        let original_pos = new $6zb6q$Vector3().copy(this.reference_position);
        this.focus_camera_on_bounding_box(bb);
        let target_zoom = this.reference_zoom;
        this.reference_position.copy(original_pos);
        this.reference_zoom = original_zoom;
        if (tilt !== undefined && orientation !== undefined) this.reference_rotation.copy(this.tmp_quat);
        return target_zoom;
    }
    get_zoom_to_focus_on_points(points, scale) {
        let old_zoom = this.reference_zoom;
        let old_pos = new $6zb6q$Vector3().copy(this.reference_position);
        this.focus_camera_on_points(points, scale);
        let new_zoom = this.reference_zoom;
        this.reference_zoom = old_zoom;
        this.reference_position.copy(old_pos);
        return new_zoom;
    }
    get_target_pos_to_focus_on_points(points, scale) {
        let old_zoom = this.reference_zoom;
        let old_pos = new $6zb6q$Vector3().copy(this.reference_position);
        this.focus_camera_on_points(points, scale);
        let new_pos = this.reference_zoom.clone();
        this.reference_zoom = old_zoom;
        this.reference_position.copy(old_pos);
        return new_pos;
    }
    focus_camera_on_sphere(sphere, debug) {
        this.reference_zoom = this.get_zoom_to_sphere(sphere, debug);
        this.reference_position.copy(sphere.center);
    }
    get_zoom_to_sphere(sphere, debug) {
        let v_fov = this.camera.fov / 2 * Math.PI / 180;
        let h_fov = 2 * Math.atan(Math.tan(v_fov) * this.camera.aspect) / 2;
        // if(debug )
        // {
        //   Debug.draw_math_sphere(sphere);
        // }
        // this.camera.zoom = 1/((sphere.radius*2) /(ViewApi.map.camera_controller.camera.top*2));
        // this.camera.updateProjectionMatrix();
        let distV = sphere.radius / Math.tan(v_fov);
        let distH = sphere.radius / Math.tan(h_fov);
        return Math.max(Math.abs(distH), Math.abs(distV));
    }
    hide_projected_points() {
        for(let i1 = 0; i1 < this.projected_points.length; i1++)this.projected_points[i1].visible = false;
    }
    show_projected_points(points) {
        this.hide_projected_points();
        for(let i1 = 0; i1 < points.length; i1++){
            this.projected_points[i1].visible = true;
            this.projected_points[i1].position.copy(points[i1]);
        }
    }
    show_plane_projection(plane, size = 1) {
        this.projection_plane_helper.plane = plane;
        this.projection_plane_helper.size = size;
        this.projection_plane_helper.updateMatrixWorld();
        this.projection_plane_helper.visible = true;
    }
    show_sphere_projection(sphere) {
        this.projection_sphere_helper.scale.set(sphere.radius, sphere.radius, sphere.radius);
        this.projection_sphere_helper.position.copy(sphere.center);
        this.projection_sphere_helper.visible = true;
    }
    focus_camera_on_points(points, zoom_scale = 1) {
        if (this.camera.isPerspectiveCamera) {
            let camera_forward_dir = new $6zb6q$Vector3(0, 0, -1).applyQuaternion(this.reference_rotation);
            let camera_backward_dir = camera_forward_dir.clone().multiplyScalar(-1);
            let fitter = new $6zb6q$PerspectiveFrustumPointFitter();
            let aspect_ratio = $6zb6q$Screen.aspect_ratio;
            let camera_pos = fitter.fit_points(points, this.reference_rotation, this.camera.fov * zoom_scale, aspect_ratio);
            let box = new $6zb6q$Box3().setFromPoints(points);
            let center = new $6zb6q$Vector3();
            box.getCenter(center);
            let reference_position_plane = new $6zb6q$Plane().setFromNormalAndCoplanarPoint(camera_backward_dir, center);
            let camera_ray = new $6zb6q$Ray(camera_pos, camera_forward_dir);
            let reference_position = new $6zb6q$Vector3();
            camera_ray.intersectPlane(reference_position_plane, reference_position);
            let zoom = camera_pos.distanceTo(reference_position);
            this.reference_zoom = zoom;
            this.reference_position.copy(reference_position);
        } else {
            let fitter = new $6zb6q$OrthographicFrustumPointFitter();
            let result = fitter.fit_points(points, this.reference_rotation, this.camera.fov * zoom_scale, $6zb6q$Screen.aspect_ratio);
            this.reference_position.copy(result.center);
            this.reference_zoom = result.distance_to_center;
        }
    }
    get_current_tilt() {
        return this.current_tilt;
    }
    get_current_orientation() {
        return this.current_orientation;
    }
    __get_zoom_to_show_rect(width, height, scale = 1) {
        // let v_fov = (this.camera.fov/2) * Math.PI/180;
        let v_fov = $6zb6q$Math.degToRad(this.camera.fov / 2);
        let h_fov = 2 * Math.atan(Math.tan(v_fov) * this.camera.aspect) / 2;
        let distV = height / Math.tan(v_fov * scale);
        let distH = width / Math.tan(h_fov * scale);
        return Math.max(Math.abs(distH), Math.abs(distV));
    }
}










class $2a6a21af251cb6f13f0dea080cae090c$export$9099ad97b570f7c extends $a49f6182d5abc5163819f1d2532ddea5$export$9099ad97b570f7c {
    constructor(){
        super();
        this.pan_speed = new $6zb6q$Vector2();
        this.zoom_speed = 0;
        this.zoom_t = 0;
        this.tilt_degrees = 70;
        this.tilt_speed = 0;
        this.vector_down_axis = new $6zb6q$Vector3(0, -1, 0);
        this.vector_up_axis = new $6zb6q$Vector3(0, 1, 0);
        this.vector_back_axis = new $6zb6q$Vector3(0, 0, -1);
        this.vector_left_axis = new $6zb6q$Vector3(-1, 0, 0);
        this.tmp_dir = new $6zb6q$Vector3();
        this.tmp_ray = new $6zb6q$Ray();
        this.tmp_intersection = new $6zb6q$Vector3();
        this.tmp_mouse_dir = new $6zb6q$Vector2();
        this.last_NDC = new $6zb6q$Vector2();
        this.last_point = new $6zb6q$Vector2();
        this.rotation_velocity = new $6zb6q$Vector2();
        this.zoom_velocity = 0;
        this.forward_dir = 0;
        this.right_dir = 0;
    }
    on_enter(camera_controller) {
        this.t_damping = 0;
    }
    on_exit(camera_controller) {
    }
    update(camera_controller) {
        camera_controller.reference_zoom -= $6zb6q$Input.scroll_delta;
        if ($6zb6q$Input.left_mouse_button_pressed) this.last_NDC.copy($6zb6q$Input.NDC);
        if ($6zb6q$Input.right_mouse_button_pressed) this.last_point.copy($6zb6q$Input.NDC);
        if ($6zb6q$Input.left_mouse_button_down && $6zb6q$Input.pointer_count === 1) this.rotation_velocity.add(new $6zb6q$Vector2($6zb6q$Input.NDC_delta.x * -16, $6zb6q$Input.NDC_delta.y * -4));
        if ($6zb6q$Input.right_mouse_button_down) {
            let prev_point = $6zb6q$CameraUtilities.get_plane_intersection(camera_controller.reference_position, undefined, this.last_point).clone();
            let current_point = $6zb6q$CameraUtilities.get_plane_intersection(camera_controller.reference_position, undefined, $6zb6q$Input.NDC).clone();
            current_point.sub(prev_point);
            camera_controller.reference_position.x -= current_point.x;
            camera_controller.reference_position.y -= current_point.y;
            camera_controller.reference_position.z -= current_point.z;
            this.last_point.copy($6zb6q$Input.NDC);
        }
        camera_controller.set_rotation_delta(this.rotation_velocity.x, this.rotation_velocity.y);
        this.rotation_velocity.multiplyScalar(0.9);
        this.last_NDC.copy($6zb6q$Input.NDC);
    }
}


class $f71dca4d33be807bde400ce702d97215$var$SceneController {
    init() {
        this.camera_controller = new $896e8a051851bf61593dd4d6a232b656$export$9099ad97b570f7c();
    }
    start() {
        this.__init_camera();
        this.__init_camera_controller();
        this.add_lights();
        // Debug.draw_sphere();
        // Debug.draw_axis();
        //SceneManager.current.add(new Grid());
        $6zb6q$SceneManager.current.fog = new $6zb6q$Fog(328965, 50, 100);
        // Here we add all objects into the scene
        // this.alley = new Alley();
        // SceneManager.current.add(this.alley);
        // Compile shaders on the first frame
        $6zb6q$Graphics.update();
    // After the object is rendered, we hide it
    // this.alley.hide();
    }
    add_lights() {
        let light = new $6zb6q$AmbientLight('#FFFFFF', 0.2);
        $6zb6q$SceneManager.current.add(light);
        // let directional_light = new DirectionalLight('#FFFFFF', 1);
        // directional_light.position.set(0, 10, 20);
        // SceneManager.current.add(directional_light);
        const spotLight = new $6zb6q$SpotLight(16777215, 0.5);
        spotLight.position.set(1, 5, 3);
        spotLight.angle = Math.PI / 8;
        spotLight.penumbra = 0.8;
        spotLight.decay = 2;
        spotLight.distance = 10;
        spotLight.target.position.x = -15;
        spotLight.target.updateMatrix = true;
        const targetObject = new $6zb6q$Object3D();
        targetObject.position.x = 1;
        $6zb6q$SceneManager.current.add(targetObject);
        spotLight.target = targetObject;
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        spotLight.shadow.camera.near = 3.7;
        spotLight.shadow.camera.far = 5.9;
        spotLight.shadow.focus = 1;
        spotLight.shadow.bias = -0.002;
        spotLight.shadow.radius = 20;
        $6zb6q$SceneManager.current.add(spotLight);
        let shadowClone = spotLight.clone();
        shadowClone.shadow.mapSize.width = 2048;
        shadowClone.shadow.mapSize.height = 2048;
        shadowClone.shadow.camera.near = 3.7;
        shadowClone.shadow.camera.far = 5.9;
        shadowClone.shadow.focus = 1;
        shadowClone.shadow.bias = -0.002;
        shadowClone.shadow.radius = 20;
        $6zb6q$SceneManager.frontScene.add(shadowClone);
        const targetObjectShadow = new $6zb6q$Object3D();
        targetObjectShadow.position.x = 1;
        $6zb6q$SceneManager.frontScene.add(targetObjectShadow);
        shadowClone.target = targetObjectShadow;
        const spotLight2 = new $6zb6q$DirectionalLight(16777215, 0.2);
        spotLight2.position.set(4, 6, 8);
        $6zb6q$SceneManager.current.add(spotLight);
    //const shadowCameraHelper = new CameraHelper( spotLight.shadow.camera );
    //SceneManager.current.add( shadowCameraHelper );
    }
    update() {
        this.camera_controller.update();
    // this.alley.update();
    }
    __init_camera() {
        let camera = new $6zb6q$PerspectiveCamera(60, $6zb6q$Screen.aspect_ratio, 0.1, 200);
        camera.updateProjectionMatrix();
        camera.position.z = 10;
        camera.clear_color.copy(new $6zb6q$Color('#181818'));
        camera.clear_alpha = 1;
        camera.fov = 30;
        $6zb6q$CameraManager.current = camera;
    }
    __init_camera_controller() {
        this.camera_controller.set_camera($6zb6q$CameraManager.current);
        // this.camera_controller.set_idle();
        //this.camera_controller.set_standard_mode();
        this.camera_controller.set_state(new $2a6a21af251cb6f13f0dea080cae090c$export$9099ad97b570f7c());
        this.camera_controller.min_zoom = 1;
        this.camera_controller.max_zoom = 40;
        this.camera_controller.reference_zoom = 7;
        this.camera_controller.reference_position.set(1, 1, 0);
        this.camera_controller.set_rotation(13, 65);
    }
}
var $f71dca4d33be807bde400ce702d97215$export$9099ad97b570f7c = new $f71dca4d33be807bde400ce702d97215$var$SceneController();




class $1e3129081b30a907abf99ef5c61d9945$export$9099ad97b570f7c extends $6zb6q$ApplicationView {
    constructor(){
        super({
            name: $8f99d40885972ccfdaaf2c54f6997ca3$export$b15ac3e9f78edd48.HOME,
            url: $8f99d40885972ccfdaaf2c54f6997ca3$export$bd738b3d3044d10.HOME,
            container: document.querySelector('.home')
        });
    }
    start() {
    }
    update() {
    }
}


















































var $e98823d0c7788f4b71b46bc6d99a03b3$exports = {};
$e98823d0c7788f4b71b46bc6d99a03b3$exports = "#define GLSLIFY 1\n#define REF_WAVELENGTH 579.0\n#define RED_WAVELENGTH 650.0\n#define GREEN_WAVELENGTH 525.0\n#define BLUE_WAVELENGTH 440.0\nuniform vec2 resolution;\nuniform sampler2D backNormals;\nuniform sampler2D noise;\nuniform samplerCube envMap;\nuniform float refractionIndex;\nuniform vec3 color;\nuniform float dispersion;\nuniform float roughness;\nuniform float opacity;\nuniform float fesnel;\nuniform float timer;\nvarying vec3 vWorldCameraDir;\nvarying vec3 vWorldNormal;\nvarying vec3 vViewNormal;\nvarying vec3 vLightViewDirection;\nvarying vec3 vViewPosition;\nvarying vec2 vUV;\n\nvec4 refractLight(float wavelength, vec3 backFaceNormal) {\n\tfloat index = 1.0 / mix(refractionIndex, refractionIndex * REF_WAVELENGTH / wavelength, dispersion);\n\tvec3 dir = vWorldCameraDir;\n\tdir = refract(dir, vWorldNormal, index);\n\tdir = refract(dir, backFaceNormal, index);\n\treturn textureCube(envMap, dir);\n}\nvec3 fresnelSchlick(float cosTheta, vec3 F0)\n{\n\treturn F0 + (1.0 - F0) * pow(1.0 + cosTheta, 5.0);\n}\nvoid main() {\n\n\tvec3 backFaceNormal = texture2D(backNormals, gl_FragCoord.xy / resolution).rgb;\n\tfloat noise = texture2D(noise, vUV.xy * 10.0 ).x;\n\t//float noise = texture2D(noise, (gl_FragCoord.xy / resolution) * 0.05 ).x;\n\tbackFaceNormal = backFaceNormal + noise * 0.01 - 0.01;\n\n\tfloat r = refractLight(RED_WAVELENGTH, backFaceNormal).r;\n\tfloat g = refractLight(GREEN_WAVELENGTH, backFaceNormal).g;\n\tfloat b = refractLight(BLUE_WAVELENGTH, backFaceNormal).b;\n\n\tvec3 fresnel = fresnelSchlick(dot(vec3(0.0,0.0,-1.0), vViewNormal), vec3(fesnel));\n\n\tvec3 reflectedColor = textureCube(envMap, reflect(vWorldCameraDir, vWorldNormal)).rgb * clamp((1.0 - roughness) + fresnel, 0.0, 1.0);\n\t\n\t// float specular = vViewNormal * vLightViewDirection\n\tfloat diffuse = clamp(dot(vViewNormal, vLightViewDirection), 0.0, 1.0);\n\n\tvec3 view_dir = - normalize(vViewPosition);\n\tfloat specular = clamp(dot(normalize(view_dir + vLightViewDirection), vViewNormal), 0.0, 1.0);\n\tfloat blinn = pow(specular, 10.0);\n\n\tgl_FragColor.rgb = vec3(r,g,b) * color + reflectedColor;\n\t//gl_FragColor.rgb = vec3(vUV.xy, 0.0);\n\t//gl_FragColor.rgb = vec3(noise);\n    //gl_FragColor.a = opacity;\n    gl_FragColor.a = opacity + noise * 0.01 + (1.0 - vUV.x) * 0.1 + blinn * 0.7;\n}";


var $dcf14e250f7c6ddd5534e8a73aebe638$exports = {};
$dcf14e250f7c6ddd5534e8a73aebe638$exports = "#define GLSLIFY 1\nvarying vec3 vWorldCameraDir;\n  varying vec3 vWorldNormal;\n  varying vec3 vViewNormal;\n  varying vec3 vLightViewDirection;\n  varying vec3 vViewPosition;\n  varying vec2 vUV;\n\n  void main() {\n    vec4 worldPosition = modelMatrix * vec4( position, 1.0);\n    vWorldCameraDir = worldPosition.xyz - cameraPosition;\n    vWorldCameraDir = normalize(vec3(-vWorldCameraDir.x, vWorldCameraDir.yz));\n    vWorldNormal = (modelMatrix * vec4(normal, 0.0)).xyz;\n    vWorldNormal = normalize(vec3(-vWorldNormal.x, vWorldNormal.yz));\n\t\tvViewNormal = normalize( modelViewMatrix * vec4(normal, 0.0)).xyz;\n  \tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    vViewPosition = (modelViewMatrix * vec4(position,1.0)).xyz;\n    vLightViewDirection = normalize( (modelViewMatrix * vec4(1.0,1.0,1.0,0.0)).xyz );\n    vUV = uv * 0.25;\n  }";









class $82b35bd3a089d2e5c849abb8995e0597$export$9099ad97b570f7c extends $6zb6q$BaseShaderMaterial {
    constructor(rt){
        super((/*@__PURE__*/$parcel$interopDefault($dcf14e250f7c6ddd5534e8a73aebe638$exports)), (/*@__PURE__*/$parcel$interopDefault($e98823d0c7788f4b71b46bc6d99a03b3$exports)), {
            resolution: {
                value: new $6zb6q$Vector2($6zb6q$Screen.width, $6zb6q$Screen.height).multiplyScalar(window.devicePixelRatio)
            },
            backNormals: {
                value: rt.texture
            },
            envMap: {
                value: $6zb6q$ResourceContainer.get_resource("cube")
            },
            color: {
                value: new $6zb6q$Color(14737632)
            },
            refractionIndex: {
                value: $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings.refractionIndex
            },
            dispersion: {
                value: $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings.dispersion
            },
            opacity: {
                value: $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings.opacity
            },
            roughness: {
                value: $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings.roughness
            },
            fesnel: {
                value: $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings.fesnel
            },
            noise: {
                value: $6zb6q$ResourceContainer.get_resource("noise")
            },
            timer: {
                value: 0
            }
        });
        this.side = $6zb6q$FrontSide;
        this.alphaTest = 0;
        this.transparent = true;
        this.needsUpdate = true;
    }
    update() {
    //if(this.uniforms.timer.value !== Time.elapsed_time)
    //  this.uniforms.timer.value = Time.elapsed_time;
    //if(this.uniforms.refractionIndex.value !== DatGui.settings.refractionIndex)
    //  this.uniforms.refractionIndex.value = DatGui.settings.refractionIndex;
    //if(this.uniforms.dispersion.value !== DatGui.settings.dispersion)
    //  this.uniforms.dispersion.value = DatGui.settings.dispersion;
    //if(this.uniforms.roughness.value !== DatGui.settings.roughness)
    //  this.uniforms.roughness.value = DatGui.settings.roughness;
    //if(this.uniforms.opacity.value !== DatGui.settings.opacity)
    //  this.uniforms.opacity.value = DatGui.settings.opacity;
    //if(this.uniforms.fesnel.value !== DatGui.settings.fesnel)
    //  this.uniforms.fesnel.value = DatGui.settings.fesnel;
    //if(this.uniforms.color.value !== DatGui.settings.color)
    //  this.uniforms.color.value.set(DatGui.settings.color);
    }
}



var $b567c2811fb888b43591b0342f6404bf$exports = {};
$b567c2811fb888b43591b0342f6404bf$exports = "#define GLSLIFY 1\n  varying vec3 vWorldNormal;\n  void main() {\n    gl_FragColor.rgb = vWorldNormal;\n  }";


var $b527a680177697d425dc4986da88f542$exports = {};
$b527a680177697d425dc4986da88f542$exports = "#define GLSLIFY 1\n\n  varying vec3 vWorldNormal;\n  void main() {\n    vWorldNormal = (modelMatrix * vec4(normal, 0.0)).xyz;\n    vWorldNormal = -normalize(vec3(-vWorldNormal.x, vWorldNormal.yz));\n  \tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }";



class $c1130e2e1ba8af102fd6cd55f1db6764$export$9099ad97b570f7c extends $6zb6q$BaseShaderMaterial {
    constructor(){
        super((/*@__PURE__*/$parcel$interopDefault($b527a680177697d425dc4986da88f542$exports)), (/*@__PURE__*/$parcel$interopDefault($b567c2811fb888b43591b0342f6404bf$exports)), {
        });
        this.side = $6zb6q$BackSide;
    }
}



var $eaa5b7d8a2ff61c2e9baf1a7cdf03cb6$exports = {};
$eaa5b7d8a2ff61c2e9baf1a7cdf03cb6$exports = "#define GLSLIFY 1\n#define REF_WAVELENGTH 579.0\n#define RED_WAVELENGTH 650.0\n#define GREEN_WAVELENGTH 525.0\n#define BLUE_WAVELENGTH 440.0\nuniform vec2 resolution;\nuniform sampler2D backNormals;\nuniform sampler2D noise;\nuniform sampler2D uLayersTexture;\nuniform samplerCube envMap;\nuniform float refractionIndex;\nuniform vec3 color;\nuniform float dispersion;\nuniform float roughness;\nuniform float opacity;\nuniform float fesnel;\nuniform float timer;\nvarying vec3 vWorldCameraDir;\nvarying vec3 vWorldNormal;\nvarying vec3 vViewNormal;\nvarying vec3 vLightViewDirection;\nvarying vec3 vViewPosition;\nvarying vec2 vUV;\n\nvec4 refractLight(float wavelength, vec3 backFaceNormal, float noise) {\n\tfloat index = 1.0 / mix(refractionIndex, refractionIndex * REF_WAVELENGTH / wavelength, dispersion + noise * 0.2);\n\tvec3 dir = vWorldCameraDir;\n\tdir = refract(dir, vWorldNormal, index);\n\tdir = refract(dir, backFaceNormal, index);\n\treturn textureCube(envMap, dir);\n}\nvec3 fresnelSchlick(float cosTheta, vec3 F0)\n{\n\treturn F0 + (1.0 - F0) * pow(1.0 + cosTheta, 5.0);\n}\nvoid main() {\n\n\tvec3 backFaceNormal = texture2D(backNormals, gl_FragCoord.xy / resolution).rgb;\n\tfloat noise = texture2D(noise, vec2(vUV.x * 2.0 , vUV.y) * 2.0  ).x;\n\tvec3 color3 = texture2D(uLayersTexture, vec2(vUV.x, vUV.y / (260.0 / 1024.0) ) ).rgb;\n\n\t//float noise = texture2D(noise, (gl_FragCoord.xy / resolution) * 0.5 ).x;\n\tbackFaceNormal = backFaceNormal + noise * 0.01 - 0.01;\n\n\tfloat r = refractLight(RED_WAVELENGTH, backFaceNormal, noise).r;\n\tfloat g = refractLight(GREEN_WAVELENGTH, backFaceNormal, noise).g;\n\tfloat b = refractLight(BLUE_WAVELENGTH, backFaceNormal, noise).b;\n\n\tvec3 fresnel = fresnelSchlick(dot(vec3(0.0,0.0,-1.0), vViewNormal), vec3(fesnel));\n\n\tvec3 reflectedColor = textureCube(envMap, reflect(vWorldCameraDir, vWorldNormal)).rgb * clamp((1.0 - roughness) + fresnel, 0.0, 1.0);\n\t\n\tfloat diffuse = clamp(dot(vViewNormal, vLightViewDirection), 0.0, 1.0);\n\n\tvec3 view_dir = - normalize(vViewPosition);\n\tfloat specular = clamp(dot(normalize(view_dir + vLightViewDirection), vViewNormal), 0.0, 1.0);\n\tfloat blinn = pow(specular, 50.0);\n\n\tgl_FragColor.rgb = vec3(r,g,b) * color3 + reflectedColor * 0.3 + blinn * 0.4;\n    gl_FragColor.a = opacity + noise * 0.05 + (1.0 - vUV.x) * 0.1 + blinn * 0.3 ;\n}";














class $dc8b5e61d6f74d28ff31ba5655aec503$export$9099ad97b570f7c extends $6zb6q$BaseShaderMaterial {
    constructor(rt){
        super((/*@__PURE__*/$parcel$interopDefault($dcf14e250f7c6ddd5534e8a73aebe638$exports)), (/*@__PURE__*/$parcel$interopDefault($eaa5b7d8a2ff61c2e9baf1a7cdf03cb6$exports)), {
            resolution: {
                value: new $6zb6q$Vector2($6zb6q$Screen.width, $6zb6q$Screen.height).multiplyScalar(window.devicePixelRatio)
            },
            backNormals: {
                value: rt.texture
            },
            envMap: {
                value: $6zb6q$ResourceContainer.get_resource("cube")
            },
            color: {
                value: new $6zb6q$Color(1671014)
            },
            refractionIndex: {
                value: $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings.refractionIndex
            },
            dispersion: {
                value: $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings.dispersion
            },
            opacity: {
                value: 0.8
            },
            //
            roughness: {
                value: 0.9
            },
            fesnel: {
                value: $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings.fesnel
            },
            noise: {
                value: $6zb6q$ResourceContainer.get_resource("noise")
            },
            uLayersTexture: {
                value: undefined
            },
            timer: {
                value: 0
            }
        });
        this.side = $6zb6q$DoubleSide;
        this.transparent = true;
        this.needsUpdate = true;
        this.layer_colors = {
            //float
            "0": {
                r: 114,
                g: 166,
                b: 146
            },
            //white
            "1": {
                r: 228,
                g: 238,
                b: 234
            },
            //satin
            "2": {
                r: 84,
                g: 126,
                b: 95
            },
            //gel
            "3": {
                r: 179,
                g: 207,
                b: 197
            },
            //pvb
            "4": {
                r: 71,
                g: 107,
                b: 93
            }
        };
    }
    update_layers_texture(glass_width, layers) {
        // create a buffer with color data
        // please note layers are stacked on the Y axis, so the variation is 
        // in the heigth componenet
        const texture_width = 1;
        const texture_height = 512;
        // in 0.5mm
        const size = texture_width * texture_height;
        const data = new Uint8Array(3 * size);
        const layer_unit = texture_height / glass_width;
        let stride = 0;
        let layers_to_units = [];
        for(let index = 0; index < layers.length; index++){
            let layer_index = 0;
            let layer_width = layers[index].split(':')[0] * layer_unit;
            let layer_color = this.layer_colors[layers[index].split(':')[1]];
            while(layer_index < layer_width){
                layer_index++;
                stride++;
                data[stride * 3] = layer_color.r;
                data[stride * 3 + 1] = layer_color.g;
                data[stride * 3 + 2] = layer_color.b;
            }
        }
        const texture = new $6zb6q$DataTexture(data, texture_width, texture_height, $6zb6q$RGBFormat);
        texture.wrapS = $6zb6q$RepeatWrapping;
        texture.wrapT = $6zb6q$RepeatWrapping;
        this.uniforms.uLayersTexture.value = texture;
    }
    update() {
    //if(this.uniforms.timer.value !== Time.elapsed_time)
    //  this.uniforms.timer.value = Time.elapsed_time;
    //if(this.uniforms.refractionIndex.value !== DatGui.settings.refractionIndex)
    //  this.uniforms.refractionIndex.value = DatGui.settings.refractionIndex;
    //if(this.uniforms.dispersion.value !== DatGui.settings.dispersion)
    //  this.uniforms.dispersion.value = DatGui.settings.dispersion;
    //if(this.uniforms.roughness.value !== DatGui.settings.roughness)
    //  this.uniforms.roughness.value = DatGui.settings.roughness;
    //if(this.uniforms.fesnel.value !== DatGui.settings.fesnel)
    //  this.uniforms.fesnel.value = DatGui.settings.fesnel;
    }
    set(width, clear) {
        this.update_layers_texture(width, clear);
    }
}




class $1d954c15bb76692db6c3eef1a646690e$export$9099ad97b570f7c extends $6zb6q$Object3D {
    constructor(){
        super();
        this.cube = new $6zb6q$Mesh();
        this.cube.renderOrder = 999;
    }
    get width() {
        return this.scale.z;
    }
    set(width) {
        width *= 0.01;
        this.scale.z = width;
        if (width === 0) this.visible = false;
        else this.visible = true;
    }
    init() {
    }
    start() {
    }
    update() {
    }
}






class $d3a461ad707f3fb1c006e70170100061$export$9099ad97b570f7c extends $6zb6q$MeshPhysicalMaterial {
    constructor(){
        super({
            color: 10658466,
            envMap: $6zb6q$ResourceContainer.get_resource("cube-blur"),
            map: $6zb6q$ResourceContainer.get_resource("alu-diffuse"),
            clearcoatNormalMap: $6zb6q$ResourceContainer.get_resource("alu-normal"),
            roughnessMap: $6zb6q$ResourceContainer.get_resource("alu-specular"),
            refractionRatio: 0.22,
            roughness: 0.8,
            metalness: 0.6,
            reflectivity: 0.1,
            clearcoat: 0.85,
            clearcoatRoughness: 0.8
        });
    }
    update() {
    //this.color.setHex(DatGui.settings.color);
    //this.refractionRatio = DatGui.settings.refractionRatio;
    //this.roughness = DatGui.settings.roughness;
    //this.metalness = DatGui.settings.metalness;
    //this.reflectivity = DatGui.settings.reflectivity;
    //this.clearcoat = DatGui.settings.clearcoat;
    //this.clearcoatRoughness = DatGui.settings.clearcoatRoughness;
    //this.needsUpdate = true;
    }
}


class $a1fac4eb6725a88f73be526095f7ba9f$export$9099ad97b570f7c extends $1d954c15bb76692db6c3eef1a646690e$export$9099ad97b570f7c {
    constructor(rt, with_tape){
        super();
        const alu_tape_thickness = with_tape ? 0.002 : 0;
        const bias = 0.0001;
        const extrude = 0.01//0.02;
        ;
        const length = 2, height = 2, cut = 1 - extrude * 2;
        const depth = 1;
        const shape = new $6zb6q$Shape();
        shape.moveTo(0 + alu_tape_thickness, 0);
        shape.lineTo(0 + alu_tape_thickness, height - alu_tape_thickness - extrude * 2);
        shape.lineTo(length - cut, height - alu_tape_thickness - extrude * 2);
        shape.lineTo(length - extrude * 2, height - alu_tape_thickness - extrude * 2 - cut);
        shape.lineTo(length - extrude * 2, 0);
        shape.lineTo(0 + alu_tape_thickness, 0);
        const extrudeSettings = {
            steps: 1,
            depth: depth - extrude * 2,
            //bevelEnabled: false,
            bevelEnabled: true,
            bevelThickness: extrude,
            bevelSize: extrude,
            bevelOffset: 0,
            bevelSegments: 1
        };
        const main_geometry = new $6zb6q$ExtrudeGeometry(shape, extrudeSettings);
        main_geometry.translate(extrude + alu_tape_thickness, extrude + alu_tape_thickness + bias, extrude);
        main_geometry.computeVertexNormals();
        this.frontMaterial = new $82b35bd3a089d2e5c849abb8995e0597$export$9099ad97b570f7c(rt);
        this.side_material = new $dc8b5e61d6f74d28ff31ba5655aec503$export$9099ad97b570f7c(rt);
        const backMaterial = new $c1130e2e1ba8af102fd6cd55f1db6764$export$9099ad97b570f7c();
        backMaterial.transparent = true;
        this.cube = new $6zb6q$Mesh(main_geometry, [
            this.frontMaterial,
            this.side_material
        ]);
        //this.cube.receiveShadow = true;
        //this.cube.castShadow = true;
        this.cube.renderOrder = 1000;
        this.frontMaterial_back = new $82b35bd3a089d2e5c849abb8995e0597$export$9099ad97b570f7c(rt);
        this.side_material_back = new $dc8b5e61d6f74d28ff31ba5655aec503$export$9099ad97b570f7c(rt);
        this.frontMaterial_back.side = $6zb6q$BackSide;
        this.side_material_back.side = $6zb6q$BackSide;
        this.frontMaterial_back.opacity = 0.1;
        this.side_material_back.opacity = 0.1;
        this.frontMaterial_back.transparent = true;
        this.side_material_back.transparent = true;
        this.cube_back = new $6zb6q$Mesh(main_geometry, [
            this.frontMaterial_back,
            this.side_material_back
        ]);
        //this.cube_back.receiveShadow = true;
        //this.cube_back.castShadow = true;
        this.cube_back.renderOrder = 10;
        let back_cube = this.cube.clone();
        back_cube.material = backMaterial;
        this.add(this.cube);
        this.cube.add(this.cube_back);
        // for the glass to cast shadows
        this.shadow_cube = this.cube_back.clone();
        this.shadow_cube.material = new $6zb6q$MeshBasicMaterial({
            opacity: 0,
            transparent: true
        });
        this.shadow_cube.material.colorWrite = false;
        this.shadow_cube.material.depthWrite = false;
        this.shadow_cube.receiveShadow = true;
        this.shadow_cube.castShadow = true;
        //shadow_cube.material = backMaterial;
        $6zb6q$SceneManager.backScene.add(back_cube);
        $6zb6q$SceneManager.current.add(this.shadow_cube);
        // alu tape around frg
        if (with_tape) {
            const alu_tape_geometry_x = new $6zb6q$BoxGeometry(length, alu_tape_thickness, depth);
            alu_tape_geometry_x.translate(length * 0.5, alu_tape_thickness * 0.5, depth * 0.5);
            this.alu_tape = new $6zb6q$Mesh(alu_tape_geometry_x, new $d3a461ad707f3fb1c006e70170100061$export$9099ad97b570f7c());
            this.alu_tape.receiveShadow = true;
            this.alu_tape.castShadow = true;
            this.alu_tape.renderOrder = 1000;
            this.cube.add(this.alu_tape);
            const alu_tape_geometry_y = new $6zb6q$BoxGeometry(length, alu_tape_thickness, depth);
            alu_tape_geometry_y.rotateZ(Math.PI * 0.5);
            alu_tape_geometry_y.translate(alu_tape_thickness * 0.5, length * 0.5, depth * 0.5);
            this.alu_tape_y = new $6zb6q$Mesh(alu_tape_geometry_y, new $d3a461ad707f3fb1c006e70170100061$export$9099ad97b570f7c());
            this.alu_tape_y.receiveShadow = true;
            this.alu_tape_y.castShadow = true;
            this.alu_tape_y.renderOrder = 1000;
            this.cube.add(this.alu_tape_y);
        }
    }
    update_layers_texture(layers_array) {
        this.side_material.update_layers_texture(layers_array);
    }
    update() {
        this.side_material.update();
        this.frontMaterial.update();
    }
    set(width, layers) {
        this.side_material.set(width, layers);
        this.side_material_back.set(width, layers);
        super.set(width);
        this.shadow_cube.scale.z = this.scale.z;
        this.shadow_cube.position.z = this.position.z;
    }
}



















class $4fbc42f573143be93746d3ddcb94c62d$export$9099ad97b570f7c extends $1d954c15bb76692db6c3eef1a646690e$export$9099ad97b570f7c {
    constructor(){
        super();
        this.depth = 0.002;
        const length = 2, height = 2, thickness = 0.15, thickness_short = 0.03;
        const geometry_y = new $6zb6q$BoxGeometry(height - thickness, thickness, this.depth);
        geometry_y.rotateZ(0.5 * Math.PI);
        geometry_y.translate(thickness * 0.5, (height + thickness) * 0.5, this.depth * 0.5);
        const geometry_x = new $6zb6q$BoxGeometry(length, thickness, this.depth);
        geometry_x.translate(length * 0.5, thickness * 0.5, this.depth * 0.5);
        //short geo
        const geometry_y_short = new $6zb6q$BoxGeometry(height - thickness_short, thickness_short, this.depth);
        geometry_y_short.rotateZ(0.5 * Math.PI);
        geometry_y_short.translate(thickness_short * 0.5, (height + thickness_short) * 0.5, this.depth * 0.5);
        const geometry_x_short = new $6zb6q$BoxGeometry(length, thickness_short, this.depth);
        geometry_x_short.translate(length * 0.5, thickness_short * 0.5, this.depth * 0.5);
        const alu_material = new $d3a461ad707f3fb1c006e70170100061$export$9099ad97b570f7c();
        this.alu_material = alu_material;
        this.cube_y = new $6zb6q$Mesh(geometry_y, alu_material);
        this.cube_y.receiveShadow = true;
        this.cube_y.castShadow = true;
        this.cube_y.renderOrder = 1001;
        this.add(this.cube_y);
        this.cube_x = new $6zb6q$Mesh(geometry_x, alu_material);
        this.cube_x.receiveShadow = true;
        this.cube_x.castShadow = true;
        this.cube_x.renderOrder = 1001;
        this.add(this.cube_x);
        // short alu tape
        this.cube_y_short = new $6zb6q$Mesh(geometry_y_short, alu_material);
        this.cube_y_short.receiveShadow = true;
        this.cube_y_short.castShadow = true;
        this.cube_y_short.renderOrder = 1001;
        this.add(this.cube_y_short);
        this.cube_x_short = new $6zb6q$Mesh(geometry_x_short, alu_material);
        this.cube_x_short.receiveShadow = true;
        this.cube_x_short.castShadow = true;
        this.cube_x_short.renderOrder = 1001;
        this.add(this.cube_x_short);
        this.set_short(false);
    }
    set_short(aBoolean) {
        if (aBoolean) {
            this.cube_y_short.visible = true;
            this.cube_x_short.visible = true;
            this.cube_y.visible = false;
            this.cube_x.visible = false;
        } else {
            this.cube_y_short.visible = false;
            this.cube_x_short.visible = false;
            this.cube_y.visible = true;
            this.cube_x.visible = true;
        }
    }
    update() {
        this.alu_material.update();
    }
    get width() {
        return this.depth;
    }
}






















var $30b5be9888b8c30dc4611bb8a2269efe$exports = {};
$30b5be9888b8c30dc4611bb8a2269efe$exports = "#define GLSLIFY 1\nuniform vec2 uSize;\nuniform sampler2D uMap;\nuniform samplerCube envMap;\nvarying vec3 vWorldNormal;\nvarying vec3 vViewNormal;\nvarying vec2 vUV;\nvarying vec3 vWorldCameraDir;\n\nvoid main() {\n\n\tvec4 reflectedColor = textureCube(envMap, reflect(vWorldCameraDir, vWorldNormal)) * 0.1;\n\t\n\tvec4 diffuse = texture2D(uMap, vUV.xy + vec2(0.0, .1) );\n\n\tgl_FragColor = diffuse + reflectedColor;\n}";


var $c786550314d276eaf85cc5c363d11819$exports = {};
$c786550314d276eaf85cc5c363d11819$exports = "#define GLSLIFY 1\nuniform vec2 uSize;\nuniform sampler2D uMap;\nuniform samplerCube envMap;\nvarying vec3 vWorldNormal;\nvarying vec3 vWorldCameraDir;\nvarying vec3 vViewNormal;\nvarying vec2 vUV;\n\nvoid main() {\n  \tvec4 worldPosition = modelMatrix * vec4( position, 1.0);\n  \tvWorldNormal = (modelMatrix * vec4(normal, 0.0)).xyz;\n  \tvWorldNormal = normalize(vec3(-vWorldNormal.x, vWorldNormal.yz));\n  \tvWorldCameraDir = worldPosition.xyz - cameraPosition;\n    vWorldCameraDir = normalize(vec3(-vWorldCameraDir.x, vWorldCameraDir.yz));\n\tvViewNormal = normalize( modelViewMatrix * vec4(normal, 0.0)).xyz;\n  \tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  \tvUV = uv * uSize;\n}";




class $01708098b9f533ab0f7a468beb819e2c$export$9099ad97b570f7c extends $6zb6q$BaseShaderMaterial {
    constructor(rt){
        super((/*@__PURE__*/$parcel$interopDefault($c786550314d276eaf85cc5c363d11819$exports)), (/*@__PURE__*/$parcel$interopDefault($30b5be9888b8c30dc4611bb8a2269efe$exports)), {
            uSize: {
                value: new $6zb6q$Vector2(1, 1)
            },
            uMap: {
                value: $6zb6q$ResourceContainer.get_resource("styrofoam-diffuse3")
            },
            envMap: {
                value: $6zb6q$ResourceContainer.get_resource("cube")
            }
        });
        this.transparent = true;
        this.needsUpdate = true;
    }
    update() {
    }
    set_size(width, height) {
        this.uniforms.uSize.value.set(width, height);
        this.needsUpdate = true;
    }
}













class $84f528458265e283eff36555053edab1$export$9099ad97b570f7c extends $1d954c15bb76692db6c3eef1a646690e$export$9099ad97b570f7c {
    constructor(length){
        super();
        this.depth = 1;
        const thickness = 0.1;
        // in decimeters
        const alu_thickness = 0.01;
        const alu_vertical = 0.04 - alu_thickness;
        const alu_sides = 0.0192;
        const alu_diagonal = Math.sqrt(Math.pow(alu_sides, 2) + Math.pow(alu_sides, 2));
        const height_tilted_alu_thickness = Math.cos(0.25 * Math.PI) * alu_thickness;
        const height_tilted_alu_diagonal = Math.cos(0.25 * Math.PI) * alu_diagonal;
        this.alu_sides = alu_sides;
        const geometry_left_vertical = new $6zb6q$BoxGeometry(length, alu_vertical, alu_thickness);
        const geometry_right_vertical = new $6zb6q$BoxGeometry(length, alu_vertical, alu_thickness);
        geometry_left_vertical.translate(length * 0.5, -alu_vertical * 0.5, alu_thickness * 0.5);
        geometry_right_vertical.translate(length * 0.5, -alu_vertical * 0.5, -alu_thickness * 0.5 + alu_sides);
        const geometry_left_diagonal = new $6zb6q$BoxGeometry(length, alu_diagonal, alu_thickness);
        const geometry_right_diagonal = new $6zb6q$BoxGeometry(length, alu_diagonal, alu_thickness);
        geometry_left_diagonal.rotateX(-0.25 * Math.PI);
        geometry_right_diagonal.rotateX(0.25 * Math.PI);
        geometry_left_diagonal.translate(length * 0.5, -alu_vertical - height_tilted_alu_diagonal * 0.5 + height_tilted_alu_thickness * 0.5, height_tilted_alu_diagonal * 0.5 + height_tilted_alu_thickness * 0.5);
        geometry_right_diagonal.translate(length * 0.5, -alu_vertical - height_tilted_alu_diagonal * 0.5 + height_tilted_alu_thickness * 0.5, height_tilted_alu_diagonal * 0.5 - height_tilted_alu_thickness * 0.5);
        const geometry_left_side = new $6zb6q$BoxGeometry(length, alu_thickness, alu_sides);
        const geometry_right_side = new $6zb6q$BoxGeometry(length, alu_thickness, alu_sides);
        geometry_left_side.translate(length * 0.5, alu_thickness * 0.5, alu_sides * 0.5);
        geometry_right_side.translate(length * 0.5, alu_thickness * 0.5, alu_sides * 0.5);
        const side_left = $6zb6q$BufferGeometryUtils.mergeBufferGeometries([
            geometry_left_vertical,
            geometry_left_diagonal,
            geometry_left_side, 
        ]);
        const side_right = $6zb6q$BufferGeometryUtils.mergeBufferGeometries([
            geometry_right_vertical,
            geometry_right_diagonal,
            geometry_right_side
        ]);
        side_left.translate(0, -alu_thickness, -this.alu_sides * 2);
        side_right.translate(0, -alu_thickness, -this.alu_sides * 2);
        const geometry_up_horizontal = new $6zb6q$BoxGeometry(length, alu_thickness, this.depth);
        const geometry_down_horizontal = new $6zb6q$BoxGeometry(length, alu_thickness, this.depth);
        geometry_up_horizontal.translate(length * 0.5, -alu_thickness * 0.5, 0);
        geometry_down_horizontal.translate(length * 0.5, -alu_thickness * 0.5 - alu_vertical - alu_sides, 0);
        const geometry_horizontal = $6zb6q$BufferGeometryUtils.mergeBufferGeometries([
            geometry_up_horizontal,
            geometry_down_horizontal
        ]);
        side_left.translate(0, 0.1, 0);
        side_right.translate(0, 0.1, 0);
        geometry_horizontal.translate(0, 0.1, 0);
        const shape_main_plastic = new $6zb6q$Shape();
        shape_main_plastic.moveTo(0, 0);
        shape_main_plastic.lineTo(0, thickness * 0.4);
        shape_main_plastic.lineTo(this.depth, thickness * 0.4);
        shape_main_plastic.lineTo(this.depth, 0);
        const number_of_cuts = 32;
        for(let i = 0; i < number_of_cuts; i++){
            let alpha = i / number_of_cuts;
            shape_main_plastic.lineTo(this.depth * (1 - alpha), Math.sin(alpha * Math.PI) * 0.02);
        }
        const extrude_settings_main_plastic = {
            steps: 1,
            depth: length,
            bevelEnabled: false
        };
        const geometry_plastic_below = new $6zb6q$ExtrudeGeometry(shape_main_plastic, extrude_settings_main_plastic);
        geometry_plastic_below.rotateY(Math.PI * 0.5);
        geometry_plastic_below.translate(0, 0, this.depth);
        geometry_plastic_below.computeVertexNormals();
        const plastic_material = new $6zb6q$MeshPhysicalMaterial({
            roughness: 0.5,
            metalness: 0.1,
            reflectivity: 0.12,
            clearcoat: 0.59,
            clearcoatRoughness: 0.44,
            color: 5263440
        });
        const alu_material = new $6zb6q$MeshPhysicalMaterial({
            roughness: 0.9,
            metalness: 0.1,
            reflectivity: 0.2,
            clearcoat: 0.2,
            clearcoatRoughness: 0.5,
            color: 986895
        });
        this.spacer_side_left = new $6zb6q$Mesh(side_left, alu_material);
        //this.spacer_side_left.receiveShadow = true;
        this.spacer_side_left.castShadow = true;
        this.spacer_side_left.renderOrder = 1001;
        this.add(this.spacer_side_left);
        this.spacer_side_right = new $6zb6q$Mesh(side_right, alu_material);
        //this.spacer_side_right.receiveShadow = true;
        this.spacer_side_right.castShadow = true;
        this.spacer_side_right.renderOrder = 1001;
        this.add(this.spacer_side_right);
        this.spacer_horizontal = new $6zb6q$Mesh(geometry_horizontal, alu_material);
        //this.spacer_horizontal.receiveShadow = true;
        this.spacer_horizontal.castShadow = true;
        this.spacer_horizontal.renderOrder = 1001;
        this.add(this.spacer_horizontal);
        this.spacer_plastic_below = new $6zb6q$Mesh(geometry_plastic_below, plastic_material);
        //this.spacer_plastic_below.receiveShadow = true;
        this.spacer_plastic_below.castShadow = true;
        this.spacer_plastic_below.renderOrder = 1001;
        this.add(this.spacer_plastic_below);
        const shape = new $6zb6q$Shape();
        shape.moveTo(alu_sides, alu_sides);
        shape.lineTo(alu_sides, 0);
        shape.lineTo(0, 0);
        const extrudeSettings = {
            steps: 1,
            depth: length,
            bevelEnabled: false
        };
        const triangle_geometry = new $6zb6q$ExtrudeGeometry(shape, extrudeSettings);
        triangle_geometry.rotateY(Math.PI * 0.5);
        triangle_geometry.translate(0, thickness * 0.4, 0);
        triangle_geometry.computeVertexNormals();
        this.triangle_left = new $6zb6q$Mesh(triangle_geometry, plastic_material);
        this.triangle_left.position.z = -alu_sides;
        this.triangle_left.castShadow = true;
        this.triangle_left.renderOrder = 1001;
        this.spacer_side_left.add(this.triangle_left);
        this.triangle_right = new $6zb6q$Mesh(triangle_geometry, plastic_material);
        //this.triangle_right.rotation.y = Math.PI;
        this.triangle_right.position.z = -alu_sides * 2;
        this.triangle_right.scale.z = -1;
        this.triangle_right.castShadow = true;
        this.triangle_right.renderOrder = 1001;
        this.spacer_side_right.add(this.triangle_right);
        this.styrofoam_material = new $01708098b9f533ab0f7a468beb819e2c$export$9099ad97b570f7c();
        const geometry_styrofoam = new $6zb6q$PlaneGeometry(this.depth * 0.9, thickness * 0.5);
        geometry_styrofoam.rotateY(Math.PI * 0.5);
        geometry_styrofoam.translate(length - 0.01, thickness * 0.65, this.depth * 0.5);
        const styrofoam = new $6zb6q$Mesh(geometry_styrofoam, this.styrofoam_material); //this.styrofoam_material);
        this.spacer_plastic_below.add(styrofoam);
    }
    set(width) {
        width *= 0.01;
        this.depth = width;
        if (width === 0) this.visible = false;
        else {
            //let ratio =  (((this.depth * 0.9 )) * width) * 50   0.05 / ;
            let ratio = 1.5 * (this.depth * 0.9 / 0.05);
            this.visible = true;
            this.styrofoam_material.set_size(ratio * 0.25 / 1.08, 0.75);
            this.spacer_horizontal.scale.z = width - this.alu_sides * 2;
            this.spacer_plastic_below.scale.z = width;
            this.spacer_horizontal.position.z = width * 0.5;
            this.spacer_side_right.position.z = this.spacer_horizontal.scale.z + this.alu_sides * 3;
            this.spacer_side_left.position.z = this.alu_sides * 2;
        }
    }
    get width() {
        return this.depth;
    }
    update() {
    //this.alu_material.update()
    }
}












class $fd2fafe2b07ee6a1b2bc2f0c35dad8c5$export$9099ad97b570f7c extends $1d954c15bb76692db6c3eef1a646690e$export$9099ad97b570f7c {
    constructor(){
        super();
        this.depth = 1;
        const thickness = 0.1;
        // in decimeters
        const alu_thickness = 0.01;
        const alu_vertical = 0.04 - alu_thickness;
        const alu_sides = 0.0192;
        const alu_suplement = 0.02 - 0.0192;
        const plastic_material = new $6zb6q$MeshPhysicalMaterial({
            roughness: 0.5,
            metalness: 0.1,
            reflectivity: 0.12,
            clearcoat: 0.59,
            clearcoatRoughness: 0.44,
            color: 5263440
        });
        const alu_material = new $6zb6q$MeshPhysicalMaterial({
            roughness: 0.9,
            metalness: 0.1,
            reflectivity: 0.2,
            clearcoat: 0.2,
            clearcoatRoughness: 0.5,
            color: 986895
        });
        const geometry_alu = new $6zb6q$BoxGeometry(thickness * 0.4 + alu_suplement, thickness * 0.4 + alu_suplement, this.depth);
        geometry_alu.translate(thickness * 0.8 - alu_suplement * 0.5, thickness * 0.8 - alu_suplement * 0.5, 0);
        this.alu = new $6zb6q$Mesh(geometry_alu, alu_material);
        //this.spacer_horizontal.receiveShadow = true;
        this.alu.castShadow = true;
        this.alu.renderOrder = 1001;
        this.add(this.alu);
        // small plastic
        const small_plastic_top_geo = new $6zb6q$BoxGeometry(thickness * 0.6 - alu_suplement, thickness * 0.4 + alu_suplement, this.depth);
        small_plastic_top_geo.translate((thickness * 0.6 - alu_suplement) * 0.5, thickness * 0.8 - alu_suplement * 0.5, this.depth * 0.5);
        small_plastic_top_geo.computeVertexNormals();
        this.small_plastic_top = new $6zb6q$Mesh(small_plastic_top_geo, plastic_material);
        this.small_plastic_top.castShadow = true;
        this.small_plastic_top.renderOrder = 1001;
        this.add(this.small_plastic_top);
        //
        const shape_main_plastic = new $6zb6q$Shape();
        shape_main_plastic.moveTo(0, 0);
        shape_main_plastic.lineTo(0, thickness * 0.4 + alu_sides);
        shape_main_plastic.lineTo(this.depth, thickness * 0.4 + alu_sides);
        shape_main_plastic.lineTo(this.depth, 0);
        const number_of_cuts = 32;
        for(let i = 0; i < number_of_cuts; i++){
            let alpha = i / number_of_cuts;
            shape_main_plastic.lineTo(this.depth * (1 - alpha), Math.sin(alpha * Math.PI) * 0.02);
        }
        const extrude_settings_main_plastic = {
            steps: 1,
            depth: thickness,
            bevelEnabled: false
        };
        const geometry_plastic_below = new $6zb6q$ExtrudeGeometry(shape_main_plastic, extrude_settings_main_plastic);
        geometry_plastic_below.rotateY(Math.PI * 0.5);
        geometry_plastic_below.translate(0, 0, this.depth);
        geometry_plastic_below.computeVertexNormals();
        this.plastic = new $6zb6q$Mesh(geometry_plastic_below, plastic_material);
        //this.spacer_plastic_below.receiveShadow = true;
        this.plastic.castShadow = true;
        this.plastic.renderOrder = 1001;
        this.add(this.plastic);
    }
    set(width) {
        width *= 0.01;
        this.depth = width;
        if (width === 0) this.visible = false;
        else {
            //let ratio =  (((this.depth * 0.9 )) * width) * 50   0.05 / ;
            this.visible = true;
            this.alu.scale.z = width;
            this.plastic.scale.z = width;
            this.alu.position.z = width * 0.5;
            this.small_plastic_top.scale.z = width;
        }
    }
    get width() {
        return this.depth;
    }
    update() {
    }
}


class $9c943520168fbd6d77058b85945673fc$export$9099ad97b570f7c extends $1d954c15bb76692db6c3eef1a646690e$export$9099ad97b570f7c {
    constructor(rt){
        super();
        this.depth = 1;
        const length = 2, thickness = 0.1;
        const length_horizontal = length - thickness;
        // in decimeters
        const alu_thickness = 0.01;
        const alu_vertical = 0.04 - alu_thickness;
        const alu_sides = 0.0192;
        const alu_variable = 1;
        this.corner_segment = new $fd2fafe2b07ee6a1b2bc2f0c35dad8c5$export$9099ad97b570f7c();
        this.add(this.corner_segment);
        this.bottom_segment = new $84f528458265e283eff36555053edab1$export$9099ad97b570f7c(length - thickness);
        this.bottom_segment.position.x = thickness;
        this.add(this.bottom_segment);
        this.top_segment = new $84f528458265e283eff36555053edab1$export$9099ad97b570f7c(length - thickness);
        this.top_segment.rotation.z = -Math.PI * 0.5;
        this.top_segment.rotation.x = Math.PI;
        this.top_segment.position.y = thickness;
        this.top_segment.position.z = this.depth * 0.5;
        this.add(this.top_segment);
    //this.top_segment.receiveShadow = true;
    //this.top_segment.castShadow = true;
    //this.bottom_segment.receiveShadow = true;
    //this.bottom_segment.castShadow = true;
    }
    set(width) {
        width *= 0.01;
        this.depth = width;
        if (width === 0) this.visible = false;
        else {
            //let ratio =  (((this.depth * 0.9 )) * width) * 50   0.05 / ;
            this.visible = true;
            this.bottom_segment.set(width * 100);
            this.top_segment.set(width * 100);
            this.corner_segment.set(width * 100);
            this.top_segment.position.z = this.depth;
        }
    }
    get width() {
        return this.depth;
    }
    update() {
    //this.alu_material.update()
    }
}


class $0e57fb1007bf650bb05091a9c0f30d03$export$9099ad97b570f7c extends $6zb6q$Object3D {
    constructor(){
        super();
        this.rt = new $6zb6q$WebGLRenderTarget($6zb6q$Screen.width, $6zb6q$Screen.height, {
            type: $6zb6q$HalfFloatType
        });
        this.glasses = [];
        this.tapeInitial = new $4fbc42f573143be93746d3ddcb94c62d$export$9099ad97b570f7c();
        this.tapeFinal = new $4fbc42f573143be93746d3ddcb94c62d$export$9099ad97b570f7c();
        this.tapeInitial.position.z = -this.tapeInitial.width;
        this.add(this.tapeInitial);
        this.add(this.tapeFinal);
        this.frg = new $a1fac4eb6725a88f73be526095f7ba9f$export$9099ad97b570f7c(this.rt, true);
        this.middle_glass = new $a1fac4eb6725a88f73be526095f7ba9f$export$9099ad97b570f7c(this.rt);
        this.outside_glass = new $a1fac4eb6725a88f73be526095f7ba9f$export$9099ad97b570f7c(this.rt);
        this.spacer_middle_glass = new $9c943520168fbd6d77058b85945673fc$export$9099ad97b570f7c();
        this.spacer_outside_glass = new $9c943520168fbd6d77058b85945673fc$export$9099ad97b570f7c();
        this.add(this.frg);
        this.add(this.middle_glass);
        this.add(this.outside_glass);
        this.add(this.spacer_middle_glass);
        this.add(this.spacer_outside_glass);
        this.glasses.push(this.frg);
        this.glasses.push(this.middle_glass);
        this.glasses.push(this.outside_glass);
    }
    set(frg = {
        thickness: 0,
        layers: [
            "0:0"
        ]
    }, mg = {
        thickness: 0,
        layers: [
            "0:0"
        ]
    }, og = {
        thickness: 0,
        layers: [
            "0:0"
        ]
    }, smg = {
        thickness: 0
    }, sog = {
        thickness: 0
    }) {
        if (frg.thickness === undefined) {
            console.warn('TODO : get a better data handling');
            return;
        }
        const bias = 0.00005;
        let space = bias;
        // INITIAL TAPE ALWAYS AT 0
        // FRG
        this.frg.set(frg.thickness, frg.layers);
        this.frg.position.z = space;
        space += this.frg.width + bias;
        // FINAL TAPE
        this.tapeFinal.set_short(sog.thickness > 0);
        this.tapeFinal.position.z = space;
        space += this.tapeFinal.width + bias;
        // SPACER 1
        this.spacer_middle_glass.set(smg.thickness);
        this.spacer_middle_glass.position.z = space;
        space += this.spacer_middle_glass.width + bias;
        // MIDDLE GLASS
        this.middle_glass.set(mg.thickness, mg.layers);
        this.middle_glass.position.z = space;
        space += this.middle_glass.width + bias;
        // SPACER 2
        this.spacer_outside_glass.set(sog.thickness);
        this.spacer_outside_glass.position.z = space;
        space += this.spacer_outside_glass.width + bias;
        // OUTSIDE GLASS
        this.outside_glass.set(og.thickness, og.layers);
        this.outside_glass.position.z = space;
        space += this.outside_glass.width + bias;
    }
    init() {
    }
    start() {
    }
    update() {
        $6zb6q$Graphics.render($6zb6q$SceneManager.backScene, $6zb6q$CameraManager.current, this.rt);
        $6zb6q$Graphics._renderer.clear(true, true);
        for(let i = 0; i < this.glasses.length; i++)this.glasses[i].update();
        this.tapeInitial.update();
        this.tapeFinal.update();
    }
}














class $96ce12049a2841a8dc83ddc3a79dca62$export$9099ad97b570f7c extends $6zb6q$Object3D {
    constructor(){
        super();
        const height = 1.5;
        const sun_map = $6zb6q$ResourceContainer.get_resource("sun");
        const sun_material = new $6zb6q$SpriteMaterial({
            transparent: true,
            map: sun_map,
            color: 16777215,
            alphaTest: 0.5
        });
        sun_material.toneMapped = false;
        const sun = new $6zb6q$Sprite(sun_material);
        sun.scale.set(0.35, 0.35, 1);
        sun.position.y = height;
        const line_material = new $6zb6q$LineDashedMaterial({
            color: 16570882,
            linewidth: 1,
            scale: 1,
            dashSize: 0.1,
            gapSize: 0.1
        });
        // line
        const line_geometry = new $6zb6q$BufferGeometry();
        const position = [];
        const x_pos = -0.1;
        position.push(0, height - 0.35, x_pos * 0.1, 0, 0, x_pos);
        line_geometry.setAttribute('position', new $6zb6q$Float32BufferAttribute(position, 3));
        const line = new $6zb6q$Line(line_geometry, line_material);
        line.computeLineDistances();
        //his.add(line);
        this.add(sun);
        const base_geo = new $6zb6q$PlaneGeometry(0.45, 0.45);
        base_geo.rotateX(-Math.PI * 0.5);
        const base_material = new $6zb6q$MeshBasicMaterial({
            transparent: true,
            color: 7829367,
            opacity: 0.5,
            map: $6zb6q$ResourceContainer.get_resource("blured_circle")
        });
        const base = new $6zb6q$Mesh(base_geo, base_material);
        base.position.z = x_pos;
    //this.add(base);
    }
}












class $e964d900285d1c99367ddf0faf9dad1c$export$9099ad97b570f7c extends $6zb6q$Mesh {
    constructor(){
        const skyShader = {
            uniforms: {
                'turbidity': {
                    value: 2
                },
                'rayleigh': {
                    value: 1
                },
                'mieCoefficient': {
                    value: 0.005
                },
                'mieDirectionalG': {
                    value: 0.8
                },
                'sunPosition': {
                    value: new $6zb6q$Vector3()
                },
                'up': {
                    value: new $6zb6q$Vector3(0, 1, 0)
                }
            },
            vertexShader: `\n				uniform vec3 sunPosition;\n				uniform float rayleigh;\n				uniform float turbidity;\n				uniform float mieCoefficient;\n				uniform vec3 up;\n		\n				varying vec3 vWorldPosition;\n				varying vec3 vSunDirection;\n				varying float vSunfade;\n				varying vec3 vBetaR;\n				varying vec3 vBetaM;\n				varying float vSunE;\n		\n				// constants for atmospheric scattering\n				const float e = 2.71828182845904523536028747135266249775724709369995957;\n				const float pi = 3.141592653589793238462643383279502884197169;\n		\n				// wavelength of used primaries, according to preetham\n				const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );\n				// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:\n				// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))\n				const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );\n		\n				// mie stuff\n				// K coefficient for the primaries\n				const float v = 4.0;\n				const vec3 K = vec3( 0.686, 0.678, 0.666 );\n				// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K\n				const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );\n		\n				// earth shadow hack\n				// cutoffAngle = pi / 1.95;\n				const float cutoffAngle = 1.6110731556870734;\n				const float steepness = 1.5;\n				const float EE = 1000.0;\n		\n				float sunIntensity( float zenithAngleCos ) {\n					zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );\n					return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );\n				}\n		\n				vec3 totalMie( float T ) {\n					float c = ( 0.2 * T ) * 10E-18;\n					return 0.434 * c * MieConst;\n				}\n		\n				void main() {\n		\n					vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n					vWorldPosition = worldPosition.xyz;\n		\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n					gl_Position.z = gl_Position.w; // set z to camera.far\n		\n					vSunDirection = normalize( sunPosition );\n		\n					vSunE = sunIntensity( dot( vSunDirection, up ) );\n		\n					vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );\n		\n					float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );\n		\n					// extinction (absorbtion + out scattering)\n					// rayleigh coefficients\n					vBetaR = totalRayleigh * rayleighCoefficient;\n		\n					// mie coefficients\n					vBetaM = totalMie( turbidity ) * mieCoefficient;\n		\n				}`,
            fragmentShader: `\n				varying vec3 vWorldPosition;\n				varying vec3 vSunDirection;\n				varying float vSunfade;\n				varying vec3 vBetaR;\n				varying vec3 vBetaM;\n				varying float vSunE;\n		\n				uniform float mieDirectionalG;\n				uniform vec3 up;\n		\n				const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );\n		\n				// constants for atmospheric scattering\n				const float pi = 3.141592653589793238462643383279502884197169;\n		\n				const float n = 1.0003; // refractive index of air\n				const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)\n		\n				// optical length at zenith for molecules\n				const float rayleighZenithLength = 8.4E3;\n				const float mieZenithLength = 1.25E3;\n				// 66 arc seconds -> degrees, and the cosine of that\n				const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;\n		\n				// 3.0 / ( 16.0 * pi )\n				const float THREE_OVER_SIXTEENPI = 0.05968310365946075;\n				// 1.0 / ( 4.0 * pi )\n				const float ONE_OVER_FOURPI = 0.07957747154594767;\n		\n				float rayleighPhase( float cosTheta ) {\n					return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );\n				}\n		\n				float hgPhase( float cosTheta, float g ) {\n					float g2 = pow( g, 2.0 );\n					float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );\n					return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );\n				}\n		\n				void main() {\n		\n					vec3 direction = normalize( vWorldPosition - cameraPos );\n		\n					// optical length\n					// cutoff angle at 90 to avoid singularity in next formula.\n					float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );\n					float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );\n					float sR = rayleighZenithLength * inverse;\n					float sM = mieZenithLength * inverse;\n		\n					// combined extinction factor\n					vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );\n		\n					// in scattering\n					float cosTheta = dot( direction, vSunDirection );\n		\n					float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );\n					vec3 betaRTheta = vBetaR * rPhase;\n		\n					float mPhase = hgPhase( cosTheta, mieDirectionalG );\n					vec3 betaMTheta = vBetaM * mPhase;\n		\n					vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );\n					Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );\n		\n					// nightsky\n					float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]\n					float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]\n					vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );\n					vec3 L0 = vec3( 0.1 ) * Fex;\n		\n					// composition + solar disc\n					float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );\n					L0 += ( vSunE * 19000.0 * Fex ) * sundisk;\n		\n					vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );\n		\n					vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );\n		\n					gl_FragColor = vec4( retColor, 1.0 );\n		\n					#include <tonemapping_fragment>\n					#include <encodings_fragment>\n				}`
        };
        const shader = skyShader;
        const material = new $6zb6q$ShaderMaterial({
            name: 'SkyShader',
            fragmentShader: shader.fragmentShader,
            vertexShader: shader.vertexShader,
            uniforms: $6zb6q$UniformsUtils.clone(shader.uniforms),
            side: $6zb6q$BackSide,
            depthWrite: false
        });
        super(new $6zb6q$BoxGeometry(1, 1, 1), material);
        this.isSky = true;
        this.sun = new $6zb6q$Vector3();
        const uniforms = this.material.uniforms;
        const effectController = $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings;
        uniforms['turbidity'].value = effectController.turbidity;
        uniforms['rayleigh'].value = effectController.rayleigh;
        uniforms['mieCoefficient'].value = effectController.mieCoefficient;
        uniforms['mieDirectionalG'].value = effectController.mieDirectionalG;
        const phi = $6zb6q$MathUtils.degToRad(90 - effectController.elevation);
        const theta = $6zb6q$MathUtils.degToRad(effectController.azimuth);
        this.sun.setFromSphericalCoords(1, phi, theta);
        uniforms['sunPosition'].value.copy(this.sun);
    }
    update() {
        const uniforms1 = this.material.uniforms;
        const effectController1 = $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.settings;
        uniforms1['turbidity'].value = effectController1.turbidity;
        uniforms1['rayleigh'].value = effectController1.rayleigh;
        uniforms1['mieCoefficient'].value = effectController1.mieCoefficient;
        uniforms1['mieDirectionalG'].value = effectController1.mieDirectionalG;
        const phi1 = $6zb6q$MathUtils.degToRad(90 - effectController1.elevation);
        const theta1 = $6zb6q$MathUtils.degToRad(effectController1.azimuth);
        this.sun.setFromSphericalCoords(1, phi1, theta1);
        uniforms1['sunPosition'].value.copy(this.sun);
        $6zb6q$Graphics._renderer.toneMappingExposure = effectController1.exposure;
    }
}


class $390d5695a19613f271efacc70166fe27$export$9099ad97b570f7c extends $6zb6q$BaseApplication {
    init() {
        this.scene_controller = $f71dca4d33be807bde400ce702d97215$export$9099ad97b570f7c;
        this.normal_render_mode = new $6zb6q$NormalRender();
        this.scene_controller.init();
        $6zb6q$Graphics.set_state(this.normal_render_mode);
        $6zb6q$Graphics._renderer.outputEncoding = $6zb6q$sRGBEncoding;
        $6zb6q$Graphics._renderer.toneMapping = $6zb6q$ACESFilmicToneMapping;
        $6zb6q$Graphics._renderer.shadowMap.type = $6zb6q$VSMShadowMap;
        //Graphics._renderer.shadowMap.type = PCFSoftShadowMap;
        $6zb6q$Graphics._renderer.shadowMap.enabled = true;
        $6zb6q$Graphics._renderer.setClearColor(undefined, 0);
        $6zb6q$Graphics._renderer.autoClear = false;
        $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.init();
        this.stats = new $6zb6q$statsjs();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        //Graphics._renderer.domElement.appendChild( this.stats.dom );
        document.body.appendChild(this.stats.dom);
    }
    on_enter() {
        $6zb6q$ResourceContainer.get_resource("cube").mapping = $6zb6q$CubeRefractionMapping;
        $6zb6q$ResourceContainer.get_resource("cube").encoding = $6zb6q$sRGBEncoding;
        $6zb6q$ResourceContainer.get_resource("cube-blur").mapping = $6zb6q$CubeRefractionMapping;
        $6zb6q$ResourceContainer.get_resource("cube-blur").encoding = $6zb6q$sRGBEncoding;
        $6zb6q$ResourceContainer.get_resource("alu-diffuse").repeat.set(6, 0.5);
        $6zb6q$ResourceContainer.get_resource("alu-diffuse").wrapT = $6zb6q$RepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("alu-diffuse").wrapS = $6zb6q$RepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("alu-diffuse").encoding = $6zb6q$sRGBEncoding;
        $6zb6q$ResourceContainer.get_resource("noise").wrapT = $6zb6q$MirroredRepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("noise").wrapS = $6zb6q$MirroredRepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("alu-normal").repeat.set(6, 0.5);
        $6zb6q$ResourceContainer.get_resource("alu-normal").wrapT = $6zb6q$RepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("alu-normal").wrapS = $6zb6q$RepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("alu-specular").repeat.set(6, 0.5);
        $6zb6q$ResourceContainer.get_resource("alu-specular").wrapT = $6zb6q$RepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("alu-specular").wrapS = $6zb6q$RepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("styrofoam-diffuse3").wrapS = $6zb6q$MirroredRepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("styrofoam-diffuse3").wrapS = $6zb6q$MirroredRepeatWrapping;
        $6zb6q$ResourceContainer.get_resource("styrofoam-diffuse3").encoding = $6zb6q$sRGBEncoding;
        $6zb6q$ResourceContainer.get_resource("sun").encoding = $6zb6q$sRGBEncoding;
        $6zb6q$SceneManager.backScene = new $6zb6q$Scene();
        $6zb6q$SceneManager.frontScene = new $6zb6q$Scene();
        //SceneManager.backScene.background = ResourceContainer.get_resource("cube-blur");
        this.sun = new $96ce12049a2841a8dc83ddc3a79dca62$export$9099ad97b570f7c();
        this.sun.position.set(1, 0, 1.5);
        $6zb6q$SceneManager.current.add(this.sun);
        this.sky = new $e964d900285d1c99367ddf0faf9dad1c$export$9099ad97b570f7c();
        this.sky.scale.setScalar(100);
        $6zb6q$SceneManager.current.add(this.sky);
        this.structure = new $0e57fb1007bf650bb05091a9c0f30d03$export$9099ad97b570f7c();
        this.structure.set({
            thickness: 10,
            layers: [
                "10:0"
            ]
        }, {
            thickness: 0,
            layers: [
                "0:0"
            ]
        }, {
            thickness: 0,
            layers: [
                "0:0"
            ]
        }, {
            thickness: 0
        }, {
            thickness: 0
        });
        let floor_geometry = new $6zb6q$PlaneGeometry(1000, 1000);
        floor_geometry.rotateX(Math.PI * -0.5);
        let floor_shadow_glass_material = new $6zb6q$ShadowMaterial({
            opacity: 0.025,
            dithering: true
        });
        let floor_shadow_spacer_material = new $6zb6q$ShadowMaterial({
            opacity: 0.2,
            dithering: true
        });
        let floor_shadow_glass = new $6zb6q$Mesh(floor_geometry, floor_shadow_glass_material);
        let floor_spacer_glass = new $6zb6q$Mesh(floor_geometry, floor_shadow_spacer_material);
        floor_shadow_glass.receiveShadow = true;
        floor_spacer_glass.receiveShadow = true;
        floor_shadow_glass.position.y = -0.0125;
        floor_spacer_glass.position.y = -0.0125;
        $6zb6q$SceneManager.frontScene.add(floor_spacer_glass);
        $6zb6q$SceneManager.current.add(floor_shadow_glass);
        $6zb6q$SceneManager.frontScene.add(this.structure);
        this.config = $6zb6q$ResourceContainer.get_resource('config');
        this.sections = $8f99d40885972ccfdaaf2c54f6997ca3$export$b15ac3e9f78edd48;
        this.home_view = new $1e3129081b30a907abf99ef5c61d9945$export$9099ad97b570f7c();
        this.home_view.start();
        this.scene_controller.start();
        $da9f8d958126ded167e046e3e193cbd8$export$9099ad97b570f7c.start();
        this.go_to($8f99d40885972ccfdaaf2c54f6997ca3$export$b15ac3e9f78edd48.INITIAL);
        document.addEventListener('contextmenu', (event)=>{
            event.preventDefault();
        }, false);
    }
    go_to(section) {
        $6zb6q$ViewManager.go_to_view(section, false);
    }
    update() {
        this.stats.begin();
        this.scene_controller.update();
        this.structure.update();
        this.stats.end();
        this.sky.update();
    }
    updateLabels(frg_w, og_w, mg_w, so_w, sm_w, u_value, total_width, g_o, g_m) {
        if (!this.structure) {
            console.warn("there are better fixes than this");
            return;
        }
        this.structure.set(frg_w, mg_w, og_w, sm_w, so_w);
    }
    on_post_render() {
        $6zb6q$Graphics.render($6zb6q$SceneManager.frontScene, $6zb6q$CameraManager.current);
    }
    on_post_start() {
    }
}


class $1b60c8aa223510725e1f9c6717734ae0$var$AppApi {
    init() {
        this.application = new $390d5695a19613f271efacc70166fe27$export$9099ad97b570f7c();
        this.loader = new $9d642608df1661374f06f1f0b35095a9$export$9099ad97b570f7c(this);
        this.render_loop = new $6zb6q$RenderLoop(this.loader, $6zb6q$Graphics);
        this.config = $6zb6q$Configuration;
        let app_container = document.querySelector('.webgl-canvas');
        let canvas = document.querySelector('.webgl-canvas');
        $6zb6q$Initializer.init(canvas, app_container, {
            antialias: true,
            logarithmicDepthBuffer: true
        });
        $6zb6q$Configuration.dpr = window.devicePixelRatio;
        this.application.init($6zb6q$Graphics);
    }
    load(settings) {
        this.init();
        window.app = this.application;
        window.ViewApi = this;
        window.settings = settings;
        this.loader.load();
    }
    dispose() {
        this.application.dispose();
        $6zb6q$Initializer.dispose(this.render_loop);
    }
    draw_debug_axis() {
        $6zb6q$Debug.draw_axis();
    }
    register_event(name, callback) {
        $6zb6q$EventManager.on(name, callback);
    }
    set_resource(name, resource) {
        $6zb6q$ResourceContainer.set_resource(name, resource);
    }
    set_settings(settings) {
        window.settings = settings;
    }
    start_main_app() {
        this.render_loop.set_state(this.application);
    }
    start() {
        this.render_loop.start();
    }
    stop() {
        this.render_loop.stop();
    }
    take_screenshot(callback) {
        $6zb6q$Graphics.take_screenshot(callback);
    }
    download_blob(blob) {
        $6zb6q$Graphics.download_screenshot(blob);
    }
    updateLabels(frg_w, og_w, mg_w, so_w, sm_w, u_value, total_width, g_o, g_m) {
        this.application.updateLabels(frg_w, og_w, mg_w, so_w, sm_w, u_value, total_width, g_o, g_m);
    }
}
const $1b60c8aa223510725e1f9c6717734ae0$export$27b45002b4727c55 = new $1b60c8aa223510725e1f9c6717734ae0$var$AppApi();


export {$1b60c8aa223510725e1f9c6717734ae0$export$27b45002b4727c55 as Api, $1b60c8aa223510725e1f9c6717734ae0$re_export$ResourceBatch as ResourceBatch};
//# sourceMappingURL=index.module.js.map

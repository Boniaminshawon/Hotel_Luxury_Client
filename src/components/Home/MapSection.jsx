
import { osm } from 'pigeon-maps/providers'
import { Map, Marker, ZoomControl } from "pigeon-maps"



const MapSection = () => {

    return (
        <div className="mt-16 mb-8">
            <h1 className='text-4xl font-semibold text-center font-primary'> Find Our Location</h1>
            <p className=" md:text-lg text-base font-secondary  text-center pb-5 md:px-10 px-1 lg:px-20 mt-7 mb-3">

                Find our Hotel Luxury  effortlessly on the map, situated in near the GEC area of Chattogram, Bangladesh. Our prime location offers guests the convenience of easy navigation to and from major transportation hubs and nearby landmarks. Experience the epitome of luxury hospitality with us, where comfort meets accessibility in the heart of Chattogram's vibrant cityscape.
            </p>
            <Map
                provider={osm}
                dprs={[1, 2]}
                height={430}
                defaultCenter={[22.3586, 91.8201]}
                defaultZoom={15}>
                <Marker width={60} anchor={[22.3586, 91.820]} />
                <ZoomControl />

            </Map>
        </div>
    );
};

export default MapSection;
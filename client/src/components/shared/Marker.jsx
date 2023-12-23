import React from "react";

export default function Marker(props) {
  return <>
<>
  {/* Hello world */}
  <div className="mapouter">
    <div className="gmap_canvas">
      <iframe
        width={600}
        height={500}
        id="gmap_canvas"
        src={props.pin}
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      />
      <a href="https://123movies-i.net">good omens 123movies</a>
      <br />
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".mapouter{position:relative;text-align:right;height:500px;width:600px;}"
        }}
      />
      <a href="https://www.embedgooglemap.net">embed google map</a>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}"
        }}
      />
    </div>
  </div>
</>

  
  
  
  </>;
}

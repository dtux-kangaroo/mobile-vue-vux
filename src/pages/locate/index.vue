<template>
 <div>
   <div>{{gis}}</div>
   <div class="locate">
     <div id="allmap"></div>
   </div>
  </div>
</template>

<script>
let map = new BMap.Map("allmap");
	let point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,12);
	let geoc = new BMap.Geocoder();

	map.addEventListener("click", function(e){
		let pt = e.point;
		geoc.getLocation(pt, function(rs){
			let addComp = rs.addressComponents;
			alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
		});
	});
export default {
    data() {
    return {
      gis:'地图'
    };
  },
}
</script>

<style lang="scss">

locate{width: 100%;height: 100%;margin:0;font-family:"微软雅黑";font-size:14px;}
#allmap {width:100%;height:500px;}
</style>

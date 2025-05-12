import{v as ee,I as ae,F as k,o as G,p as C,W as le,q as N,s as te,V as _,t as ce,U as $,w as J,a as ne,x as de,y as O,L as fe,z as ue,A as pe,r as d,u as me,C as E,D as he,j as c,c as M,G as ie,d as ve}from"./index-dnSyhVWS.js";import{_ as F}from"./extends-CF3RwP-h.js";const se=ee>=125?"uv1":"uv2",X=new N,j=new _;class V extends ae{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new k(e,3)),this.setAttribute("uv",new k(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new G(t,6,1);return this.setAttribute("instanceStart",new C(i,3,0)),this.setAttribute("instanceEnd",new C(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new G(i,t*2,1);return this.setAttribute("instanceColorStart",new C(n,t,0)),this.setAttribute("instanceColorEnd",new C(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new le(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new N);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),X.setFromBufferAttribute(t),this.boundingBox.union(X))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new te),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let s=0,l=e.count;s<l;s++)j.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(j)),j.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(j));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class oe extends V{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,n=new Float32Array(2*i);if(t===3)for(let s=0;s<i;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];else for(let s=0;s<i;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5],n[2*s+6]=e[s+6],n[2*s+7]=e[s+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class q extends ce{constructor(e){super({type:"LineMaterial",uniforms:$.clone($.merge([J.common,J.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ne(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${ee>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const I=new O,K=new _,Q=new _,m=new O,h=new O,w=new O,H=new _,W=new ue,v=new fe,Y=new _,D=new N,T=new te,S=new O;let b,U;function Z(r,e,t){return S.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),S.multiplyScalar(1/S.w),S.x=U/t.width,S.y=U/t.height,S.applyMatrix4(r.projectionMatrixInverse),S.multiplyScalar(1/S.w),Math.abs(Math.max(S.x,S.y))}function ge(r,e){const t=r.matrixWorld,i=r.geometry,n=i.attributes.instanceStart,s=i.attributes.instanceEnd,l=Math.min(i.instanceCount,n.count);for(let o=0,f=l;o<f;o++){v.start.fromBufferAttribute(n,o),v.end.fromBufferAttribute(s,o),v.applyMatrix4(t);const u=new _,g=new _;b.distanceSqToSegment(v.start,v.end,g,u),g.distanceTo(u)<U*.5&&e.push({point:g,pointOnLine:u,distance:b.origin.distanceTo(g),object:r,face:null,faceIndex:o,uv:null,[se]:null})}}function ye(r,e,t){const i=e.projectionMatrix,s=r.material.resolution,l=r.matrixWorld,o=r.geometry,f=o.attributes.instanceStart,u=o.attributes.instanceEnd,g=Math.min(o.instanceCount,f.count),p=-e.near;b.at(1,w),w.w=1,w.applyMatrix4(e.matrixWorldInverse),w.applyMatrix4(i),w.multiplyScalar(1/w.w),w.x*=s.x/2,w.y*=s.y/2,w.z=0,H.copy(w),W.multiplyMatrices(e.matrixWorldInverse,l);for(let x=0,P=g;x<P;x++){if(m.fromBufferAttribute(f,x),h.fromBufferAttribute(u,x),m.w=1,h.w=1,m.applyMatrix4(W),h.applyMatrix4(W),m.z>p&&h.z>p)continue;if(m.z>p){const a=m.z-h.z,y=(m.z-p)/a;m.lerp(h,y)}else if(h.z>p){const a=h.z-m.z,y=(h.z-p)/a;h.lerp(m,y)}m.applyMatrix4(i),h.applyMatrix4(i),m.multiplyScalar(1/m.w),h.multiplyScalar(1/h.w),m.x*=s.x/2,m.y*=s.y/2,h.x*=s.x/2,h.y*=s.y/2,v.start.copy(m),v.start.z=0,v.end.copy(h),v.end.z=0;const z=v.closestPointToPointParameter(H,!0);v.at(z,Y);const B=pe.lerp(m.z,h.z,z),A=B>=-1&&B<=1,R=H.distanceTo(Y)<U*.5;if(A&&R){v.start.fromBufferAttribute(f,x),v.end.fromBufferAttribute(u,x),v.start.applyMatrix4(l),v.end.applyMatrix4(l);const a=new _,y=new _;b.distanceSqToSegment(v.start,v.end,y,a),t.push({point:y,pointOnLine:a,distance:b.origin.distanceTo(y),object:r,face:null,faceIndex:x,uv:null,[se]:null})}}}class re extends de{constructor(e=new V,t=new q({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let l=0,o=0,f=t.count;l<f;l++,o+=2)K.fromBufferAttribute(t,l),Q.fromBufferAttribute(i,l),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+K.distanceTo(Q);const s=new G(n,2,1);return e.setAttribute("instanceDistanceStart",new C(s,1,0)),e.setAttribute("instanceDistanceEnd",new C(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;b=e.ray;const l=this.matrixWorld,o=this.geometry,f=this.material;U=f.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),T.copy(o.boundingSphere).applyMatrix4(l);let u;if(i)u=U*.5;else{const p=Math.max(n.near,T.distanceToPoint(b.origin));u=Z(n,p,f.resolution)}if(T.radius+=u,b.intersectsSphere(T)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),D.copy(o.boundingBox).applyMatrix4(l);let g;if(i)g=U*.5;else{const p=Math.max(n.near,D.distanceToPoint(b.origin));g=Z(n,p,f.resolution)}D.expandByScalar(g),b.intersectsBox(D)!==!1&&(i?ge(this,t):ye(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(I),this.material.uniforms.resolution.value.set(I.z,I.w))}}class xe extends re{constructor(e=new oe,t=new q({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const we=d.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:n,lineWidth:s,segments:l,dashed:o,...f},u){var g,p;const x=me(A=>A.size),P=d.useMemo(()=>l?new re:new xe,[l]),[L]=d.useState(()=>new q),z=(i==null||(g=i[0])==null?void 0:g.length)===4?4:3,B=d.useMemo(()=>{const A=l?new V:new oe,R=e.map(a=>{const y=Array.isArray(a);return a instanceof _||a instanceof O?[a.x,a.y,a.z]:a instanceof ne?[a.x,a.y,0]:y&&a.length===3?[a[0],a[1],a[2]]:y&&a.length===2?[a[0],a[1],0]:a});if(A.setPositions(R.flat()),i){t=16777215;const a=i.map(y=>y instanceof E?y.toArray():y);A.setColors(a.flat(),z)}return A},[e,l,i,z]);return d.useLayoutEffect(()=>{P.computeLineDistances()},[e,P]),d.useLayoutEffect(()=>{o?L.defines.USE_DASH="":delete L.defines.USE_DASH,L.needsUpdate=!0},[o,L]),d.useEffect(()=>()=>{B.dispose(),L.dispose()},[B]),d.createElement("primitive",F({object:P,ref:u},f),d.createElement("primitive",{object:B,attach:"geometry"}),d.createElement("primitive",F({object:L,attach:"material",color:t,vertexColors:!!i,resolution:[x.width,x.height],linewidth:(p=n??s)!==null&&p!==void 0?p:1,dashed:o,transparent:z===4},f)))}),Se=d.forwardRef(({threshold:r=15,geometry:e,...t},i)=>{const n=d.useRef(null);d.useImperativeHandle(i,()=>n.current,[]);const s=d.useMemo(()=>[0,0,0,1,0,0],[]),l=d.useRef(),o=d.useRef();return d.useLayoutEffect(()=>{const f=n.current.parent,u=e??(f==null?void 0:f.geometry);if(!u||l.current===u&&o.current===r)return;l.current=u,o.current=r;const p=new he(u,r).attributes.position.array;n.current.geometry.setPositions(p),n.current.geometry.attributes.instanceStart.needsUpdate=!0,n.current.geometry.attributes.instanceEnd.needsUpdate=!0,n.current.computeLineDistances()}),d.createElement(we,F({segments:!0,points:s,ref:n,raycast:()=>null},t))});function be(){return c.jsx(c.Fragment,{children:c.jsxs("mesh",{rotation:[Math.PI/-2,0,0],position:[0,-2,-7.5],receiveShadow:!0,children:[c.jsx("circleGeometry",{args:[4,100]}),c.jsx("meshBasicMaterial",{color:new E(M.surface400.hex)}),c.jsx(Se,{lineWidth:3,color:new E(M.surface50.hex)})]})})}const _e=d.forwardRef((r,e)=>{const{nodes:t,materials:i}=ie("/3dFiles/low-poly-f1-car-transformed.glb");return i.PaletteMaterial001.color=new E(M.primary300.hex),i.PaletteMaterial002.color=new E(M.secondary300.hex),i.PaletteMaterial003.color=new E(M.tertiary300.hex),i.PaletteMaterial004.color=new E(M.warning300.hex),i.PaletteMaterial005.color=new E(M.primary300.hex),c.jsxs("group",{ref:e,...r,dispose:null,children:[c.jsx("mesh",{geometry:t.Cube.geometry,material:i.PaletteMaterial001,position:[-1.843,1.745,0],scale:[.257,.027,1.507]}),c.jsxs("group",{position:[5.697,2.828,0],scale:[.371,.018,.961],children:[c.jsx("mesh",{geometry:t.Cube002_1.geometry,material:i.PaletteMaterial002}),c.jsx("mesh",{geometry:t.Cube002_2.geometry,material:i.PaletteMaterial003})]}),c.jsxs("group",{position:[-1.221,2.314,-.037],rotation:[0,Math.PI/2,0],scale:[.09,.09,.031],children:[c.jsx("mesh",{geometry:t.Cube005.geometry,material:i.PaletteMaterial004}),c.jsx("mesh",{geometry:t.Cube005_1.geometry,material:i.PaletteMaterial005})]})]})});ie.preload("/3dFiles/low-poly-f1-car-transformed.glb");function Ee(){const r=d.useRef(null);return ve(()=>{r.current&&(r.current.rotation.y+=.01)}),c.jsx(c.Fragment,{children:c.jsx(_e,{ref:r,castShadow:!0,position:[0,-2,-7.5],rotation:[0,0,0],scale:[.5,.5,.5]})})}function Me(){return c.jsxs(c.Fragment,{children:[c.jsx("directionalLight",{position:[0,1.5,0],rotation:[Math.PI/-6,0,0],intensity:2}),c.jsx("ambientLight",{position:[0,0,0],intensity:1}),c.jsx(Ee,{}),c.jsx(be,{})]})}export{Me as default};

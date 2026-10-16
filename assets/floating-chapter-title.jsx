const Component=({item})=>{
 const p=item.props;const f=useCurrentFrame();const {durationInFrames:d}=useVideoConfig();
 const a=Math.min(1,f/8,(d-f)/8);const o=Math.max(0,a);
 const shadow='0 4px 8px rgba(0,0,0,.32)';
 return <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',boxSizing:'border-box',padding:'4px 10px',opacity:o}}>
 <div style={{fontFamily:p.font,fontSize:p.title.length>22?83:94,fontWeight:800,lineHeight:1.06,letterSpacing:-2,color:p.color,textShadow:shadow,whiteSpace:'nowrap'}}>{p.title}</div></div>;
};

const Component=({item})=>{
 const p=item.props;const f=useCurrentFrame();const o=Math.min(1,f/6);
 const shadow='-2px -2px 0 #111,2px -2px 0 #111,-2px 2px 0 #111,2px 2px 0 #111,0 3px 4px rgba(0,0,0,.45)';
 return <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',boxSizing:'border-box',padding:'4px 8px',opacity:o}}>
 <div style={{fontFamily:p.font,fontSize:p.term.length>25?48:54,fontWeight:700,lineHeight:1.06,color:p.ink,textShadow:shadow,whiteSpace:'pre-line'}}>{p.term}</div></div>;
};

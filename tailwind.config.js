const { nodeName } = require("jquery");
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    enabled:true,
  content:['./public/**/*.html',],
    },
  darkMode: 'class', // or 'media' or 'class' or 'false'
  theme: {
    screens: {
      'll': {'max': '1536px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '320px'},
    },

    extend: {
      backgroundImage: theme => ({
        'graphic': "url('img/graphic.png')",
        'graphicsm': "url('img/graphicsm.png')",
        'lines': "url('img/lines.png')",
        'linessm': "url('img/linessm.png')",
        'mobile': "url('img/Nilex-Mokapv1.png')",
        'mobilesm': "url('img/Nilex-Mokapv1sm.png')",
        'shadowScreen':"url('img/shadowScreen.png')",
        'results':"url('img/results.png')",   
      }),

  
      height: {   
        s0h: '90px',
        s0ch:'85px',
        s0smh:'61px',
        s1h:'872px',
        s1h1h:'167px',
        s1ph:'350px',
        s1barh:'23px',
        s1t1h:'730px',
        s1t2h:'442px',
        s1llh:'700px',
        s1mdh:'600px',
        s1smh:'500px',
        s1h1smh:'43px',
        s1psmh:'187px',
        s1t1smh:'343px',
        s2h: '1064px',
        s2g20h:'726px',
        pinesh:'582px',
        pinessmh:'153px',
        s2h2h:'209px',
        s2metodh:'515px',
        s2ph:'162px',
        s2metod2h:'468px',
        s2smh:'890px',
        s2h2smh:'32px',
        s2g20smh:'848px',
        s2backsmh:'620px',
        s2psmh:'90px',
        s2metodsmh:'212px',
        s2metod2smh:'404px',
        s2metod2mdh:'800px',  
        s3wh:'784px',
        s3h: '978px',
        s3smh: '745px', 
        s3p1h: '46px',
        s3h2h: '288px',
        s3p2h:'9px',
        s3u1h:'197px',
        s3p5h:'217px',
        s3u2h:'254px',
        s3u1smh:'108px',
        s3u2smh:'126px',
        s4h:'846px',
        s4p1h:'65px', 
        s4smh:'587px',       
        s4gsmh:'230px',
        s4p1smh:'30px',
        s5h:'1318px',
        s5smh:'764px',
        s5wh:'892px',
        s5pw:'199px',
        s6h:'1746px',
        s6imgh:'1487px',
        s6h2h: '58px',
        s6imgsmh:'479px',
        s6smh:'646px',
        s6ph:'99px',
        s7h:'1275px',
        s7s11h:"594px",
        s7s12h:"548px",
        s7s13h:"481px",
        s7s14h:"390px",
        s7smh:'488px',
        s7imgsmh:'236px',
        s8h:'1280px',
        s8smh:'488px',
        s9h:'1122px',
        s9s1h:'632px',
        s9s2h:'555px',
        s10h:'1094px',
        s10ch:'692px',
        s10imgh:'692px',
        s10img2h:'130px',
        s10h2h:'170px',
        s10ph:'147px',
        s10smh:'482px',
        s10imgsmh:'358px',
        s10c1h:'442px',
        s11img2h:'666px',
        s11h:'1258px',
        s11smh:'437px',
        s12h:'838px',
        s12ch:'583px',
        s12smh:'730px',
        s12imgsmh:'157px',
        s13h:'1120px',
        s13ch:'970px',
        s13smh:'617px',
        s14h:'510px',
        s14ch:'510px',
        s14c1h:'416px',
        s14c2h:'218px',
        s14h3h:'63px',
        s14h2h:'149px',
        s14ah:'57px',
        s14imgh:'17px',
      },
      width: {
        s0logocw:'126px',
        s0c1w:'579px',
        s0c2w:'457px',
        s0c3w:'49px',
        s0logow:'94px',
        s0cw:'1170px',
        s1w1w:'1525px',
        s1h1w:'375px',
        s1pw:'643px',
        s1t1w:'942px',
        s1t2w:'656px',
        s1t12w:'159px',  
        s1barw:'634px',
        s1h1smw:'218px',    
        s1psmw:'267px',
        s1t1smw:'305px',
        s2g20w:'1524px',
        s2h2w: '574px',
        s2metodw:'541px',
        s2pw: '572px',
        s2metod2w:'971px',
        s2g20smw:'266px',
        s2h2smw:'204px',     
        s2h22smw: '209px',    
        s2metodsmw:'224px',
        s2psmw:'259px',
        s2metod2smw:'269px',
        s3ww: '1540px',
        s3p1w: '98px',
        s3h2w: '725px',
        s3h2smw:'274px',
        s3p2w:'86px',
        s3p3w:'38px',
        s3p4w:'71px',
        s3u1smw:'247px',
        s4ww:'1530px',
        s4wwm:'1500px',
        s4h2w:'625px',
        s4p1w:'164px',
        s4p2w:'216px',
        s4p3w:'170px',
        s4p4w:'234px',
        s4h2smw:'250px',
        s4p1smw:'80px',
        s5ww:'1382px',
        s5h2w:'414px',
        s5p1tw:'89px',
        s6ww:'1585px',
        s7sw:'1135px',
        s7s11w:"578px",
        s7s12w:"616px",
        s7s13w:"518px",
        s7s14w:"652px",
        s7cw:'1464px',
        s7p3w:'483px',
        s7imgsmw:'231px',
        s9s1w:'1122px',
        s9s2w:'984px',
        s10cw: '1459px',
        s10imgw:'839px',
        s10img2w:'130px',
        s10h2w:'478px',
        s10img1smw:'306px',
        s11cw:'1707px',
        s11img2w:'1066px',
        s11img1smw:'297px',
        s11img2smw:'277px',
        s12w:'1560px',
        s12imgw:'378px',
        s12ulw:'450px',
        s13nw:'446px',
        s13img3w:'25px',
        s13img4w:'35px',
        s13bsmw:'135px',
        s14c1w:'1140px',
        s14ulw:'245.77px',
        s14nw:'170.77px',
        s14a1w:'65.34px',
        s14a2w:'73.34px',
        
      },
      margin:{
        's0logomy':'34px',
        's0logomr':'32px',
        's1mt':'92px',
        's1w1mt':'100px',
        's1h1ml':'84px', 
        '-s1pmt':'-3px',
        '-s1pml':'-55px',
        's1p1mb': '33px', 
        '-s1tmt':'-30px',
        's1t12mt':'70px',
        's1t1ml':'10px',
        '-s1t12ml':'-139px',
        '-s1t2ml':'-194px',
        's1smmt':'61px',
        's1csmmt':'38px',    
        's1psmmt':'4px',    
        's1h1smml':'20px',
        's1h1smmb':'9px',
        's1t1smmt':'33px',
        's1t1smml':'7.5px',    
        's2g20mt':'190px',
        's2g20ml':'50px',
        's2h2ml':'34px', 
        's2h22ml':'8px',
        '-s2metodmt':'-104px',
        's2pml':'38px',
        's2pmt':'12px',
        '-s2metod2ml':'-238px',
        's2g20smmt':'34px',
        's2csmml':'22px',
        's2h2smml':'31px',
        '-s2h2smml':'-28px',
        '-s2psmmt':'-89px',  
        '-s2psmml':'-20px',  
        '-s2metodsmmt':'-122px',
        '-s2metod2smmt':'-185px',
        '-s2metod2smml':'-26px',
        '-s3wmt':'-190px',
        's3wml':'92px',
        's3p1mt':'9px',
        '-s3h2ml':'-17px',
        '-s3h2mt':'-12px',
        's3p2mt':'4px',
        's3u1mt':'58px',
        '1px':'1px',
        '2px':'2px',
        '-s3p3ml':'-6px',
        's3p4ml':'26px', 
        's3p1smml':'10px',
        's3p2smml':'26px',
        's3u1smmt':'27px',
        's4h2ml':'93px', 
        's4p1ml':'56px', 
        's4snmt':'60px',
        's4p1mt':'29px',
        's4p2mt':'17px',
        's4u1mt':'29px',
        '-s4p3ml':'-4px',
        's4h2smmt':'32px',
        's4p2smmt':'12px',
        's4p1smml':'15px',
        '-s4p1smmt':'-52px',
        '-s4p2smmt':'-62px',
        '-s5ml':'-8px',
        's5p1ml':'72px',
        's5p2ml':'102px',
        's5p3ml':'92px',
        's5p4ml':'82px',
        's5p5ml':'52px',
        '-s5p1mt':'-45px',
        '-s5p2mt':'-26px',
       '-s5smmt':'-76px',
        's6d1ml':'115.5px',
        's6pmt':'26px',
        '-s6d2mt':'-48px',
        's6d2ml':'5.5px',
        's6h2smml':'25px',
        '-s6h2smml':'-25px',
        's6h2smmt':'46px',
        's6psmmt':'30px',
        '-s6imgsmmt':'-143px',
        's7h2ml':'104px',
        '-s7s4ml':'-70px',
        '-s9s2ml':'-68px',
        's9s4ml':'80px',
        '-s10psmmt':'-138px',
        's12imgml':'108px',
        's12ulml':'92px',
        's12ul1mt':'76px',
        's12ul2mt':'136px',
        '-s13img1mt':'-75px',
        '-s13img2mt':'-66px',
        's14h3mb':'6px',
        's14h2mb':'125px', 
        },
      colors: {
          s0c: '#231f20',
          s0navc: '#ce9a64',
          s1c: '#e2f4e8',    
          s1h1c: '#0c8a68',     
          s1pc: '#698c75',
          s2h22c: '#858585',
          s2pc: '#787878',
          s3h2c: '#0c8866',
          s4p1c:'#eb921f', 
          s4p2c: '#138267',
          s7h2c:'#0d8a6c',
          s7nc:'#168f77',
          s9c:'#e0f5ee',
          s13c:'#f9a53a',
          s14fc:'#656b6f',
          
          carouselnumbercolor:'#99bba5',  
      },
      shadow:{
        sjenka:'#000',
      },
      fontSize: {
        's0navs':'12px',
        's0ls':'13px',
        's1h1s': '80px',
        's1ps': '21px',
        's1h1sms':'28px',
        's1psms':'15px',
        's1navbs': '17px',
        's2h22s': '30px',
        's3p1s': '22px',
        's3h2s': '57.9px',
        's3p2s': '14px',
        's4p1s': '66px',
        's4p2s': '26px',
        's4p2sms':'20px',
        's5s': '174px',
        's5sms':'11px',
        's5psms':'91px',
        's7s':'58px',
        's7ns':'24px',
        's7h2sms':'18px',
        's10h2s':'80.15px',
        's14h3s':'47px',
        's14h2s':'124px',
        's14p1s':'11px',
        's14es':'8px',
      },
      lineHeight: {
        's0navl':'12px',
        's0ll':'13px',
        's1h1l':'96px',
        's1pl': '33px',
        's1psml':'1.2',
        's2h2l': '65px',
        's3p1l': '28.95px',
        's3h2l': '72.37px',
        's3p2sml':'24px',
        's5sml':'0.5',
        's7h2l':'72px',
        's12l':'111px',
      },   
      gap: {
        's5smgapx': '57px',
        's5smgapy': '52px',
      },
      gridTemplateRows: {
        's5gr3': 'repeat(3, minmax(0, 199px))',
        's12smgr7': 'repeat(7, minmax(0, 1fr))',
        's13smgr12': 'repeat(12, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        's5gc5': 'repeat(5, minmax(0, 200px))',
      },
      strokeWidth: {
        'strokewidth': '1px',
      },
      stroke: {
        current: '#ff0000',
      },
      textDecoration: ['active'],
        cursor: {
          crosshair: 'crosshair',
      },
      fill: {
        n: 'none',
        qs:'#e2f4e8',
        headerfill:'#231f20',
      },
      padding:{
        's0px':'15px',
        's3wpt':'171px',
        's4h2pt':'246px',
        's5pt':'190px',
        's6h2pt':'167px',
        's7pt':'127px',
        's7ppt':'41px',
        's7spt':'108px',
        's10pt':'191px',
        's10h2pt':'170px',
        's10ppt':'57px',
        's10csmpt':'52px',
        's12smpt':'43px',
        's12pt':'152px',
        's13pt':'136px',
        's14imgpx':'10px',
        's14ppt':'2px',
        },
      minWidth: {
        '320px':'320px',
        '304px':'304px',
      },

      inset: {
        's0navbt':'523px',
        's0navbl':'1560px',
        'pinest': '340px',
        'pinessmt': '117px',
        'backgroundtop':'270px',
        'shape1top':'83px',
        'shape1left':'246px',
        'shape2top':'243px',
        'shape2left':'491px',
        'shape3top':'366px',
        'shape3left':'0px',
        'shape4top':'155px',
        'shape4left':'1505px',
        'shape5top':'412px',
        'shape5left':'1275px',
        's5imgt':'100px',
        's5imgt1':'106px',
        's5imgt2':'52px',
        's10img2t':'262px',
        's10img2l':'369px',
        's10c1r':'575px',
        's10img2sml':'154px',
        's10img2smt':'120px',
        's10xsmt':'360px',
        's11img1t':'192px',
        's11img2t':'252px',
        's11img2l':'460px',
        's11img1smt':'72px',
        's11img2sml':'42px',
        's10modalxr':'30%',
        's10modalxt':'21%',
        's10modalxt1':'25%',
        's10modalxr1':'16%',
        's10modalxt2':'30%',
        's10modalxr2':'14%',
        's10modalxr3':'3%',
        's10modalxt3':'35%',

        'testquickdesktop':'92px',
        'testworkprocessdesktop':'964px',
        'testchallangedesktop':'2076px',
        'testnilexdesktop':'3006px',
        'testfromstartdesktop':'3853px',
        'testfromstartmobile':'2817px',
        'testwelcomedesktop':'5171px',
        'testmobilesdesktop':'8192px',
        'testcarousel2desktop':'9473px',
        'testwelcomemobile':'3581px',
        'testmobile':'1451px',
        'testnilexmobile':'2230px',
        'testwelcomemobile':'3581px',
        'testresults':'13784px',
        'testfeaturesmobile':'4228px',
        'testresultsmobile':'6854px',
           },  
      fontFamily: {
        galanoregular: ['GalanoGrotesque-Regular'],
        galanomedium: ['GalanoGrotesque-Medium'],
        galanobold: ['GalanoGrotesque-Bold'],
        roboto: ['Roboto'],
      },
      boxShadow: {
        sjenka: '3px 3px 3px 3px blue',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      borderWidth:{
        '1px':'1px',
        '4px':'4px',
        '3px':'3px',
        '2px':'2px',
      },
      borderRadius:{
        '50':'50%',
      },
      animation:{
        
        'arrowleft':'movearrowleft 1s linear 1',
        'arrowright':'movearrowright 1s linear 1',
      },
      
      keyframes: {
        movearrowleft:{
          '50%':{  transform:'translateX(-20px)'},
          '100%':{  transform:'translateX(0px)'},
           },
        movearrowright:{
          '50%':{  transform:'translateX(20px)'},
          '100%':{  transform:'translateX(0px)'},
           },
      },
            
         
      maxWidth: {
        '310px':'310px',
        '300px':'300px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '2/5': '40%',
      },
    },

    variants: {
      extend: {
        cursor: ['hover', 'focus'],
        zIndex: ['hover'],
        animation: ['hover'],
        flexGrow: ['responsive', 'hover', 'focus'],
        fontFamily:['hover',],
        boxShadow:['hover'],
        textOpacity:['dark'],
        fill:['hover'],
        },
    },
    plugins: [  ]
        // corePlugins: {
        //  fill: false,
        // },
  }
}
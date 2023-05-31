import React from 'react';

var styles = {
  /** fill styles */
  // white
  fill0: {
    fill: '#FFFFFF',
  },
  /** svg styles */
  svg0: {
    width: 'auto',
    height: '100%',
  }
}


class Logo extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="logo" style={styles.svg0} viewBox="0 0 10.583 10.583">
        <path style={styles.fill0} d="M 5.2927264,1.1699965e-4 C 3.2492384,0.002717 1.3899884,1.182077 0.51632642,3.029377 h 0.0083 V 6.8481989 H 2.2521504 V 7.3747933 H 0.43471042 C 1.2673104,9.3190625 3.1777054,10.58082 5.2927584,10.583333 c 2.320943,2.7e-5 4.37101,-1.5123676 5.0559666,-3.7299484 -0.02885,0.046354 -0.05897,0.090963 -0.09198,0.1327929 -0.115167,0.1504934 -0.254037,0.2677819 -0.4159906,0.3514158 -0.161954,0.079348 -0.338415,0.1188495 -0.529161,0.1188495 -0.190745,0 -0.36669,-0.039502 -0.528644,-0.1188495 -0.161954,-0.08366 -0.302392,-0.2009489 -0.421158,-0.3514158 -0.115167,-0.1504933 -0.205483,-0.3299582 -0.270265,-0.5389767 -0.06478,-0.2090186 -0.09715,-0.4435956 -0.09715,-0.7027786 -1e-6,-0.255029 0.03237,-0.4870661 0.09715,-0.6960847 0.06478,-0.2131989 0.155097,-0.3946745 0.270265,-0.5451675 0.118766,-0.15052 0.259204,-0.265798 0.421158,-0.345199 0.161954,-0.08366 0.337899,-0.125067 0.528644,-0.125067 0.190746,0 0.367207,0.04141 0.529161,0.125067 0.1619536,0.07938 0.3008236,0.194652 0.4159906,0.345199 0.118766,0.150493 0.210134,0.3319686 0.274915,0.5451675 0.02087,0.067362 0.03753,0.1381905 0.05168,0.2103151 C 10.56516,2.349511 8.2019704,6.1899965e-4 5.2927654,1.1699965e-4 Z M 10.5833,5.2586526 h 1e-6 M 3.5796724,4.032904 c 0.190745,0 0.367206,0.04141 0.52916,0.125067 0.161954,0.07938 0.300307,0.194652 0.415474,0.345199 0.118766,0.150493 0.210651,0.3319686 0.275433,0.5451675 0.06478,0.2090186 0.09715,0.4410557 0.09715,0.6960847 0,0.259183 -0.03237,0.49376 -0.09715,0.7027786 -0.06478,0.2090185 -0.156667,0.3884834 -0.275433,0.5389767 -0.115167,0.1504934 -0.25352,0.2677819 -0.415474,0.3514158 -0.161954,0.079348 -0.338415,0.1188495 -0.52916,0.1188495 -0.190746,0 -0.367208,-0.039502 -0.529161,-0.1188495 -0.161954,-0.08366 -0.301876,-0.2009489 -0.420642,-0.3514158 -0.115167,-0.1504933 -0.205483,-0.3299582 -0.270265,-0.5389767 -0.06478,-0.2090186 -0.09715,-0.4435956 -0.09715,-0.7027786 0,-0.255029 0.03237,-0.4870661 0.09715,-0.6960847 0.06478,-0.2131989 0.155098,-0.3946745 0.270265,-0.5451675 0.118766,-0.15052 0.258688,-0.265798 0.420642,-0.345199 0.161953,-0.08366 0.338415,-0.125067 0.529161,-0.125067 z m 2.941906,0.01244 c 0.233934,0 0.437025,0.02064 0.609776,0.06252 0.176349,0.0376 0.324096,0.07353 0.442862,0.10697 v 2.9093527 c 0,0.5016445 -0.111724,0.8651251 -0.33486,1.0908915 -0.223136,0.2257401 -0.561443,0.3389805 -1.014914,0.3389805 -0.176349,0 -0.343935,-0.016669 -0.502289,-0.050112 -0.154756,-0.033549 -0.289455,-0.0735 -0.404622,-0.1193786 l 0.09198,-0.507968 c 0.100771,0.046063 0.22294,0.086068 0.366898,0.1193522 0.147558,0.037597 0.300527,0.056329 0.458882,0.056329 0.298715,0 0.512768,-0.069267 0.642331,-0.2072194 0.133162,-0.1379522 0.199986,-0.3573423 0.199986,-0.6583555 V 7.0487542 c -0.04319,0.033443 -0.127765,0.077443 -0.253729,0.1317611 -0.122365,0.050191 -0.266457,0.075458 -0.43201,0.075458 -0.169152,0 -0.329429,-0.031406 -0.480585,-0.094058 -0.147558,-0.062679 -0.277035,-0.1587218 -0.388603,-0.2883662 -0.111568,-0.1337719 -0.199799,-0.2990818 -0.26458,-0.4955592 -0.06478,-0.1964774 -0.09715,-0.4305252 -0.09715,-0.7022758 0,-0.2382811 0.0308,-0.4556604 0.09198,-0.652138 0.06118,-0.2006842 0.148897,-0.3720531 0.264063,-0.5141861 0.118767,-0.146313 0.262859,-0.259051 0.432011,-0.338478 0.169151,-0.08366 0.360229,-0.125569 0.572568,-0.125569 z M 3.5796724,4.54712 c -0.24473,0 -0.438945,0.10869 -0.582904,0.3260692 -0.14036,0.2131989 -0.210321,0.5033909 -0.210321,0.8712635 0,0.3678726 0.06996,0.6605779 0.210321,0.8779572 0.143959,0.2131989 0.338174,0.3198777 0.582904,0.3198777 0.24473,0 0.437376,-0.1066788 0.577735,-0.3198777 0.143959,-0.2173793 0.216006,-0.5100846 0.216006,-0.8779572 0,-0.3678726 -0.07205,-0.6580646 -0.216006,-0.8712635 C 4.0170484,4.65581 3.8244024,4.54712 3.5796724,4.54712 Z m 5.731886,0 c -0.24473,0 -0.438945,0.10869 -0.582904,0.3260692 -0.140359,0.2131989 -0.21032,0.5033909 -0.21032,0.8712635 0,0.3678726 0.06996,0.6605779 0.21032,0.8779572 0.143959,0.2131989 0.338174,0.3198777 0.582904,0.3198777 0.24473,0 0.437377,-0.1066788 0.577736,-0.3198777 0.1439586,-0.2173793 0.2160046,-0.5100846 0.2160046,-0.8779572 0,-0.3678726 -0.07205,-0.6580646 -0.2160046,-0.8712635 C 9.7489354,4.65581 9.5562884,4.54712 9.3115584,4.54712 Z m -2.784812,0.01244 c -0.269923,0 -0.478754,0.10263 -0.626312,0.3074685 -0.143958,0.2048382 -0.216005,0.4762978 -0.216005,0.8149078 0,0.1881167 0.01984,0.3494049 0.05943,0.4831768 0.04319,0.1337719 0.09905,0.2444988 0.16743,0.3322866 0.07198,0.087788 0.152902,0.1525041 0.242876,0.1942814 0.09357,0.041804 0.189112,0.062547 0.286284,0.062547 0.133162,0 0.255331,-0.020637 0.366899,-0.062547 0.111568,-0.045984 0.199799,-0.098053 0.26458,-0.1565523 V 4.628271 c -0.05039,-0.01667 -0.118778,-0.03088 -0.205153,-0.04339 -0.08278,-0.01667 -0.196068,-0.0254 -0.340027,-0.0254 z" />
      </svg>
    );
  }
};


export { Logo };

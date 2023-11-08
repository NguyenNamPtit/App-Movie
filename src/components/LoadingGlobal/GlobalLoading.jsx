import React, { useEffect, useState } from 'react';
import { Paper, Box, LinearProgress, Toolbar } from "@mui/material";
import { useSelector } from "react-redux";
import "../LoadingGlobal/GlobalLoading.scss"
const GlobalLoading = () => {
  const { globalLoading } = useSelector((state) => state.globalLoading);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true);
      const body = document.querySelector('body');
      body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

    }
  }, [globalLoading]);

  return (
    // <div className="loading-overlay" >
    //   <Paper sx={{
        
    //     opacity: isLoading ? 1 : 0,
    //     pointerEvents: "none",
    //     transition: "all .3s ease",
    //     position: "fixed",
    //     width: "100vw",
    //     height: "100vh",
    //     zIndex: 999
    //   }}>
    //     <Toolbar />
    //     <LinearProgress color="inherit" />
    //     <Box sx={{
    //       position: "absolute",
    //       top: "50%",
    //       left: "50%",
    //       transform: "translate(-50%, -50%)"
    //     }}>
    //       <p style={{ fontWeight: 700, fontSize: '1.7rem', color:'white' }}>
    //         Mov<span style={{ color: 'yellow' }}>flx</span>
    //       </p>

    //     </Box>
    //   </Paper>
    // </div>
    <Box
      className="loading-container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <main>
        <svg className="sp" viewBox="0 0 128 128" width="128px" height="128px">
          <defs>
            <linearGradient id="grad1" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#000" />
              <stop offset="40%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
            <linearGradient id="grad2" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#000" />
              <stop offset="60%" stopColor="#000" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
            <mask id="mask1">
              <rect x={0} y={0} width={128} height={128} fill="url(#grad1)" />
            </mask>
            <mask id="mask2">
              <rect x={0} y={0} width={128} height={128} fill="url(#grad2)" />
            </mask>
          </defs>
          <g fill="none" strokeLinecap="round" strokeWidth={16}>
            <circle className="sp__ring" r={56} cx={64} cy={64} stroke="#ddd" />
            <g stroke="hsl(223,90%,50%)">
              <path
                className="sp__worm1"
                d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                stroke="hsl(343,90%,50%)"
                strokeDasharray="43.98 307.87"
              />
              <g transform="translate(42,42)">
                <g className="sp__worm2" transform="translate(-42,0)">
                  <path
                    className="sp__worm2-1"
                    d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                    strokeDasharray="43.98 175.92"
                  />
                </g>
              </g>
            </g>
            <g stroke="hsl(283,90%,50%)" mask="url(#mask1)">
              <path
                className="sp__worm1"
                d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                strokeDasharray="43.98 307.87"
              />
              <g transform="translate(42,42)">
                <g className="sp__worm2" transform="translate(-42,0)">
                  <path
                    className="sp__worm2-1"
                    d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                    strokeDasharray="43.98 175.92"
                  />
                </g>
              </g>
            </g>
            <g stroke="hsl(343,90%,50%)" mask="url(#mask2)">
              <path
                className="sp__worm1"
                d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                strokeDasharray="43.98 307.87"
              />
              <g transform="translate(42,42)">
                <g className="sp__worm2" transform="translate(-42,0)">
                  <path
                    className="sp__worm2-1"
                    d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                    strokeDasharray="43.98 175.92"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </main>
    </Box>
  );
}

export default GlobalLoading;


import { lazy, Suspense, useState, useEffect, useRef } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

function shouldLoadSpline(mobileBreakpoint) {
    if (typeof window === 'undefined') return false; // SSR guard

    const isMobile = window.innerWidth < mobileBreakpoint;
    const isLowEnd = navigator.hardwareConcurrency <= 2;

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    const noWebGL = !gl;

    return !isMobile && !isLowEnd && !noWebGL;
}

export const SplineBackground = ({
    sceneUrl,
    fallbackColor = '#0a0a0a',
    fallbackImageUrl,
    mobileBreakpoint = 768,
    className = '',
    children,
}) => {
    const [splineLoaded, setSplineLoaded] = useState(false);
    const [splineFailed, setSplineFailed] = useState(false);
    const [canLoad, setCanLoad] = useState(false);
    const timeoutRef = useRef();

    useEffect(() => {
        setCanLoad(shouldLoadSpline(mobileBreakpoint));
    }, [mobileBreakpoint]);

    useEffect(() => {
        if (!canLoad) return;

        // If Spline hasn't loaded after 8 seconds, show fallback
        timeoutRef.current = setTimeout(() => {
            if (!splineLoaded) {
                setSplineFailed(true);
            }
        }, 8000);

        return () => clearTimeout(timeoutRef.current);
    }, [canLoad, splineLoaded]);

    function onLoad() {
        clearTimeout(timeoutRef.current);
        setSplineLoaded(true);
    }

    const showFallback = !canLoad || splineFailed;

    return (
        <div
            className={className}
            style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden', top: 0, left: 0, zIndex: 0 }}
        >
            {/* Fallback layer — always rendered underneath */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    background: fallbackImageUrl
                        ? `url(${fallbackImageUrl}) center/cover no-repeat`
                        : fallbackColor,
                    // Fade out once Spline loads
                    opacity: splineLoaded && !showFallback ? 0 : 1,
                    transition: 'opacity 0.6s ease',
                }}
                className="hero-bg brightness-[0.7] transform scale-110"
            />

            {/* Spline scene — only on capable devices */}
            {canLoad && !splineFailed && (
                <Suspense fallback={null}>
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        right: '-5%',
                        height: '100%',
                        zIndex: 10, // Bring to front for interaction
                        // Fade in when ready
                        opacity: splineLoaded ? 1 : 0,
                        transition: 'opacity 0.6s ease',
                        pointerEvents: 'auto', // MUST BE AUTO FOR SPLINE INTERACTION
                        // TRICK: Usando uma máscara radial para apagar as bordas duras do fundo cinza que vem do Spline
                        WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
                        maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
                    }} className="transform scale-75 md:scale-[0.60] w-[120%] md:w-[80%] lg:w-[60%] flex items-center justify-center">
                        <Spline
                            scene={sceneUrl}
                            onLoad={onLoad}
                        />
                    </div>
                </Suspense>
            )}

            {/* Content sits on top of everything */}
            {children && (
                <div style={{ position: 'relative', zIndex: 1 }}>
                    {children}
                </div>
            )}
        </div>
    );
}

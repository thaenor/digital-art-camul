using System;
using System.Collections.Generic;

using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Drawing;

namespace ColorHarp
{
    public class Painter
    {


        private class ColorRGB
        {

            private double _R;
            private double _G;
            private double _B;

            /// <summary>
            /// Void Color
            /// </summary>
            public ColorRGB()
            {
                this._R = 0;
                this._G = 0;
                this._B = 0;
            }

            /// <summary>
            /// Color from Other color
            /// </summary>
            /// <param name="c"></param>
            public ColorRGB(ColorRGB c)
            {
                this._R = c.R;
                this._G = c.G;
                this._B = c.B;
            }

            /// <summary>
            /// Color from RGB parameters
            /// </summary>
            /// <param name="R"></param>
            /// <param name="G"></param>
            /// <param name="B"></param>
            public ColorRGB(double R, double G, double B)
            {
                this._R = R;
                this._G = G;
                this._B = B;

            }

            public double R { get { return _R; } }
            public double G { get { return _G; } }
            public double B { get { return _B; } }


            public int finalR { get { return limitColor(_R); } }
            public int finalG { get { return limitColor(_G); } }
            public int finalB { get { return limitColor(_B); } }

            /// <summary>
            ///  verify if R, G, B   0.0 <= double <= 1.0
            ///  return true RGB between 0 255
            /// </summary>
            /// <param name="component"></param>
            /// <returns></returns>
            private int limitColor(double component)
            {
                return (int)(component);
            }
            /// <summary>
            /// Mix two RGB Colors
            /// (r1, g1, b1) + (r2, g2, b2) = ((r1+r2)/2, (g1+g2)/2, (b1+b2)/2)
            /// </summary>
            /// <param name="pixelColor"></param>
            public void mixColor(ColorRGB pixelColor)
            {

                this._R = mixerColors(this._R, pixelColor._R);
                this._G = mixerColors(this._G, pixelColor._G);
                this._B = mixerColors(this._B, pixelColor._B);

            }
       

            private double mixerColors(double baseColor, double pixelColor)
            {
                double mixed = baseColor;
                if (pixelColor != 0)
                {
                    mixed = Math.Sqrt(((baseColor * baseColor) + (pixelColor * pixelColor)) / 2);
                }
                
                return mixed;

            }
        }
        public enum ColorNumber
        {
            F4 = 1,
            FS,
            G4,
            GS,
            A4,
            AS,
            B4,
            C5,
            CS,
            D5,
            DS,
            E5,
            F5
        }


        //
        private const int _musicKeyLength = 2;
        //
        private const int _paintArea = 100;
        //
        private const int _matrixHeight = 4;
        //

        private int _screenWidth;
        private int _screenHeight;
        private int _matrixWidth;

        //
        private ColorRGB[,] _scenePixelMatrix;
        private int[,] _colorMatrix;

        List<ColorRGB> _colors = new List<ColorRGB>();

        string _sequence = "";

        public Painter()
        {
            createColors();

        }

        /// <summary>
        /// Create List of Colors
        /// </summary>
        public void createColors()
        {
            _colors.Add(new ColorRGB(  0,   0,   0)); //Black to fill 0 Index
            _colors.Add(new ColorRGB( 82,   0,   0)); //F4
            _colors.Add(new ColorRGB(116,   0,   0)); //F#
            _colors.Add(new ColorRGB(179,   0,   0)); //G4
            _colors.Add(new ColorRGB(238,   0,   0)); //G#
            _colors.Add(new ColorRGB(255,  99,   0)); //A4
            _colors.Add(new ColorRGB(255, 236,   0)); //A#
            _colors.Add(new ColorRGB(153, 255,   0)); //B4
            _colors.Add(new ColorRGB( 40, 255,   0)); //C5
            _colors.Add(new ColorRGB(  0, 255, 232)); //C#
            _colors.Add(new ColorRGB(  0, 124, 255)); //D5
            _colors.Add(new ColorRGB(  5,   0, 255)); //D#
            _colors.Add(new ColorRGB( 69,   0, 234)); //E5
            _colors.Add(new ColorRGB( 87,   0, 158)); //F5

        }


        /// <summary>
        /// Set Up Music Sequence from Input Token
        /// </summary>
        /// <param name="sequence">Input Token</param>
        public void setMusicSequence (string sequence)
        {
            _sequence = sequence;

            _matrixWidth = (_sequence.Length/ _musicKeyLength ) / _matrixHeight;
            if ((_sequence.Length / _musicKeyLength) % _matrixHeight != 0)
            {
                _matrixWidth++;
            }

            _colorMatrix = new int[_matrixWidth, _matrixHeight];

            _screenWidth = (_matrixWidth * _paintArea);
            _screenHeight = (_matrixHeight * _paintArea);

            // setup scene Pixel Matrix Size
            _scenePixelMatrix = new ColorRGB[_screenWidth, _screenHeight];
            // clean canvas
            for (int i = 0; i <= _screenWidth - 1; i++)
            {
                for (int j = 0; j <= _screenHeight - 1; j++)
                {
                    _scenePixelMatrix[i, j] = new ColorRGB();
                }
            }
            string kolor = "";
            int matrixPosCalculator = 0;

            // fill in the grid
            for ( int i = 0; i < _sequence.Length; i+= _musicKeyLength)
            {
                kolor = _sequence.Substring(i, _musicKeyLength);
                

                _colorMatrix[
                    matrixPosCalculator / _matrixHeight, 
                    matrixPosCalculator % _matrixHeight
                             ] = (int)getColorNumber(kolor);

                matrixPosCalculator++;
            }

            // fill in remainding positions
            while (matrixPosCalculator != ((_matrixHeight * _matrixWidth))){

                _colorMatrix[
                   matrixPosCalculator / _matrixHeight,
                   matrixPosCalculator % _matrixHeight
                            ] = (int)getColorNumber(kolor);

                matrixPosCalculator++;

            }
        }

        /// <summary>
        /// Setup Moving Color Musical Notes
        /// </summary>
        /// <param name="paintOffSet">amount of Paint OffSet</param>
        /// <param name="gridLines">if Gridlines</param>
        public void setMapColor(int paintOffSet)
        {

            ColorRGB pixelColor = null;

            for (int i = 0; i < _matrixWidth; i++ )
            {
                for (int j = 0; j < _matrixHeight; j++)
                {
                    pixelColor = _colors[_colorMatrix[i, j]];

                    int startX = (i * _paintArea);
                    int endX = ((i + 1) * _paintArea - 1);
                    //
                    int startY = (j * _paintArea);
                    int endY = ((j + 1) * _paintArea - 1);
                    //
                    if (i > 0)
                    {
                        startX = startX - (paintOffSet );
                    }
                    if (j > 0)
                    {
                        startY = startY - (paintOffSet );
                    }
                    //

                    for (int x = startX; x <=  endX ; x++)
                    {
                        for (int y = startY; y <= endY; y++)
                        {
                            ColorRGB mixed = new ColorRGB(pixelColor);
                            mixed.mixColor(_scenePixelMatrix[x, y]);                           
                            _scenePixelMatrix[x, y] = mixed;
                        }
                    }
                }
            }
        }


        /// <summary>
        /// Transfer Pixel Matrix to Image
        /// </summary>
        /// <param name="pbxCanvas">PictureBox to Paint</param>
        public void paint(PictureBox pbxCanvas)
        {

            pbxCanvas.Image = new Bitmap(_screenWidth, _screenHeight);

            int r, g, b;

            for (int i = 0; i < (_screenWidth - 1); i++)
            {
                for (int j = 0; j < (_screenHeight - 1); j++)
                {

                    r = _scenePixelMatrix[i, j].finalR;
                    g = _scenePixelMatrix[i, j].finalG;
                    b = _scenePixelMatrix[i, j].finalB;

                    ((Bitmap)pbxCanvas.Image).SetPixel(i, j, Color.FromArgb(r, g, b));
                }
            }

            pbxCanvas.Refresh();
            //System.Threading.Thread.Sleep(5);
        }
    


        /// <summary>
        /// Parse String to Object Enum
        /// </summary>
        /// <param name="Object">Object Name</param>
        /// <returns></returns>
        public static ColorNumber getColorNumber(String Object)
        {
            ColorNumber myEnum;
            Enum.TryParse(Object, out myEnum);
            return myEnum;
        }

    }
}

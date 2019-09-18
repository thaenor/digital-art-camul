using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ColorHarp
{
    public partial class FrmCanvas : Form
    {
        private Painter _painter = new Painter();
        private string _sequence = null;

        private const int _musicKeyLength = 2;
        //
        private const int _paintArea = 100;
        //
        private const int _matrixHeight = 4;
        //
        private int _matrixWidth;


        public FrmCanvas(string music)
        {
            _sequence = music;
            InitializeComponent();


            _matrixWidth = (_sequence.Length / _musicKeyLength) / _matrixHeight;
            if ((_sequence.Length / _musicKeyLength) % _matrixHeight != 0)
            {
                _matrixWidth++;
            }

            if (_matrixWidth < 8)
            {
                this.pbxCanvas.Width = (int)(_paintArea * (_matrixWidth));
                this.Width = this.pbxCanvas.Width + 35;
            }

        }

        public void start()
        {
            //string music = "A4ASE5ASF5E5F5E5F4FSG4GSA4ASB4C5CSD5DSE5F5F4FSG4GSE5F5F4FSG4GSA4E5FSGSCS";
            //string music = "D5DSE5F5F5E5D5DSE5F5F5E5E5F5DSCSD5DSCS";
            _painter.setMusicSequence(_sequence);

            int n = _sequence.Length;

            int mutation = 10;
            int step = 20; // 10, 15 , 20
                        
            do
            {
                if (mutation == 0)
                {
                    step = Math.Abs(step);
                    mutation = step;
                }

                _painter.setMapColor(mutation);
                _painter.paint(pbxCanvas);

                if (mutation + step > 100 || mutation + step < 0)
                {
                    step = -step;
                    string a = _sequence.Substring(8);
                    string b = _sequence.Substring(0,8);
                    _sequence = a + b;
                    _painter.setMusicSequence(_sequence);
                }


                mutation += step;
                n--;
            } while (n > 0);


        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ColorHarp
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main(string[] args)
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            FrmCanvas frmCanvas = new FrmCanvas(args[0]);
            frmCanvas.Show();
            frmCanvas.start();
            System.Threading.Thread.Sleep(2500);
            System.Environment.Exit(1);
        }
    }
}

namespace ColorHarp
{
    partial class FrmCanvas
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.pbxCanvas = new System.Windows.Forms.PictureBox();
            this.btnPaint = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pbxCanvas)).BeginInit();
            this.SuspendLayout();
            // 
            // pbxCanvas
            // 
            this.pbxCanvas.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.pbxCanvas.Location = new System.Drawing.Point(7, 6);
            this.pbxCanvas.Margin = new System.Windows.Forms.Padding(4);
            this.pbxCanvas.Name = "pbxCanvas";
            this.pbxCanvas.Size = new System.Drawing.Size(1075, 500);
            this.pbxCanvas.TabIndex = 0;
            this.pbxCanvas.TabStop = false;
            // 
            // btnPaint
            // 
            this.btnPaint.Location = new System.Drawing.Point(7, 524);
            this.btnPaint.Margin = new System.Windows.Forms.Padding(4);
            this.btnPaint.Name = "btnPaint";
            this.btnPaint.Size = new System.Drawing.Size(100, 28);
            this.btnPaint.TabIndex = 1;
            this.btnPaint.Text = "Color Harp";
            this.btnPaint.UseVisualStyleBackColor = true;
            // 
            // FrmCanvas
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1086, 513);
            this.Controls.Add(this.btnPaint);
            this.Controls.Add(this.pbxCanvas);
            this.Margin = new System.Windows.Forms.Padding(4);
            this.Name = "FrmCanvas";
            this.Text = "Color Harp";
            ((System.ComponentModel.ISupportInitialize)(this.pbxCanvas)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.PictureBox pbxCanvas;
        private System.Windows.Forms.Button btnPaint;
    }
}


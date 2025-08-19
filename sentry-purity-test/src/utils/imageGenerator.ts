export const generateScoreImage = (score: string | null): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      // Create high-res canvas for quality
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      canvas.width = 1434;
      canvas.height = 855;
      
      // Load the template image
      const templateImg = new window.Image();
      templateImg.crossOrigin = 'anonymous';
      
      templateImg.onload = () => {
        // Draw the template background at high resolution
        ctx.drawImage(templateImg, 0, 0, canvas.width, canvas.height);
        
        // Draw the score text
        ctx.fillStyle = '#3E1E8A';
        ctx.font = '120px Rubik, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(score || '0', canvas.width / 2, 500);
        
        // Draw the description text
        ctx.font = '25px Rubik, Arial, sans-serif';
        ctx.fillText('description here', canvas.width / 2, 650);
        
        // Download the high-resolution image
        const link = document.createElement('a');
        link.download = `sentry-purity-score-${score}.png`;
        link.href = canvas.toDataURL();
        link.click();
        
        resolve();
      };
      
      templateImg.onerror = () => {
        reject(new Error('Failed to load template image'));
      };
      
      // Set the template image source
      templateImg.src = '/template-score.png';
      
    } catch (error) {
      reject(error);
    }
  });
};

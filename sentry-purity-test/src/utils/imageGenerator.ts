export const generateScoreImage = (score: string | null, description: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      canvas.width = 1434;
      canvas.height = 855;
      
      const templateImg = new window.Image();
      templateImg.crossOrigin = 'anonymous';
      
      templateImg.onload = () => {
        ctx.drawImage(templateImg, 0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#3E1E8A';
        ctx.font = '120px Rubik, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(score || '0', canvas.width / 2, 500);
        
        ctx.font = '25px Rubik, Arial, sans-serif';
        ctx.fillText(description, canvas.width / 2, 650);
        
        const link = document.createElement('a');
        link.download = `sentry-purity-score-${score}.png`;
        link.href = canvas.toDataURL();
        link.click();
        
        resolve();
      };
      
      templateImg.onerror = () => {
        reject(new Error('Failed to load template image'));
      };
      
      templateImg.src = '/template-score.png';
      
    } catch (error) {
      reject(error);
    }
  });
};

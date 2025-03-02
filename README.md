# Resume Website Deployment on AWS

This project demonstrates how to deploy a static resume website using **AWS services**, including **Amazon S3**, **CloudFront**, **Route 53**, **AWS Lambda**, **DynamoDB** and **API Gateway** with a focus on security, performance, and automation. The deployment process is fully automated using **GitHub Actions**, ensuring seamless updates with every code push.

---

## Features

- 🖥️ **Responsive Design**: A clean, professional resume website built using HTML, CSS, and JavaScript.
- 🌍 **Global Availability**: Content delivery optimized for speed and security with AWS CloudFront.
- 🔒 **Custom Domain with HTTPS**: Secured the website using a custom domain (`viveksati.online`) and SSL/TLS certificates.
- 🤖 **Automated Deployment**: GitHub Actions pipeline for syncing updates to S3 and invalidating CloudFront cache.

---

## Step-by-Step Implementation

### 1. **Website Development**

- Designed a responsive static resume using:

  - **HTML**: For content structure.
  - **CSS**: For styling and layout.
  - **JavaScript**: For interactivity.

- Organized the project files into:
  img/icons/ # Social media icons img/ # Images for the website index.html # Main HTML file /js # JavaScript files for interactions styles.css/ # Stylesheet files

---

### 2. **Amazon S3: Hosting the Static Website**

- **Created an S3 bucket**:
- Bucket Name: `vivek-resume-bucket`.
- Enabled **Static Website Hosting** in S3.
- Uploaded all website files (HTML, CSS, JS, images) to the bucket.

- **Configured Bucket Permissions**:
- Ensured the bucket is private and accessible only via **CloudFront**.
- Used **IAM policies** and **Origin Access Identity (OAI)** for secure access.

---

### 3. **AWS CloudFront: Securing and Accelerating Content Delivery**

- **Created a CloudFront Distribution**:
- Configured the S3 bucket as the origin.
- Set up **Alternate Domain Names (CNAMEs)** for `viveksati.online` and `www.viveksati.online`.
- Used **AWS Certificate Manager (ACM)** to issue an SSL certificate for HTTPS.
- Configured **Caching** to improve performance and reduce load on the S3 bucket.

---

### 4. **Domain Purchase** //if you don't want to purchase you can stay upto cloudfront dns url

- Purchased the domain `viveksati.online` from **Namecheap**.
- Configured the domain to point to AWS Route 53 for DNS management.

---

### 5. **Amazon Route 53: Domain Configuration**

- **Created a Hosted Zone**:
- Added DNS records to Route 53:

  - **A (Alias) Record**: Pointed `resume.viveksati.online` to the CloudFront distribution.

- Validated DNS propagation and verified the domain's accessibility.

---

### 6. **GitHub Actions: Automating Deployment**

- **Set up a GitHub Repository**:
- Added all website files (`index.html`, `styles.css`, `script.js`, etc.).

- **Configured a Workflow**:
- Created `.github/workflows/deploy.yml` to automate the following tasks:
  1. Sync updated files to the S3 bucket.
  2. Invalidate CloudFront cache for immediate updates.
- Sample GitHub Actions Workflow:

  ```yaml
  name: Deploy Website to S3 and CloudFront

  on:
    push:
      branches:
        - main

  jobs:
    deploy:
      runs-on: ubuntu-latest

      steps:
        - name: Checkout code
          uses: actions/checkout@v2

        - name: Set up AWS CLI
          uses: aws-actions/configure-aws-credentials@v1
          with:
            aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
            aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
            aws-region: ${{ secrets.AWS_REGION }}

        - name: Sync website files to S3
          run: aws s3 sync ./ s3://vivek-resume-bucket --delete

        - name: Invalidate CloudFront Cache
          run: aws cloudfront create-invalidation --distribution-id YOUR_CLOUDFRONT_DIST_ID --paths "/*"
  ```

---

### 7. **Testing and Validation**

- **Tested the website**:
- Accessed the website via `https://viveksati.online`.
- Verified global availability and HTTPS functionality.

- **Validated Automation**:
- Pushed updates to the GitHub repository and confirmed automatic deployment via GitHub Actions.

---

## Tools and Technologies

- **AWS Services**:
- S3: Static file hosting.
- CloudFront: Content delivery network (CDN).
- Route 53: DNS management.
- Lambda :
- API Gateway :
- DynamoDB :
- ACM: SSL/TLS certificate.
- **CI/CD**:
- GitHub Actions for automated deployment.
- **Web Development**:
- HTML, CSS, JavaScript.
- **Security**:
- IAM roles and policies.
- GitHub Secrets for AWS credential management.

---

## Lessons Learned

1. Mastered deploying a professional website using **AWS services**.
2. Implemented a fully automated **CI/CD pipeline** for seamless updates.
3. Gained hands-on experience with DNS management, HTTPS, and content delivery optimization.

---

## Live Demo

🌐 Check out the live project here: [https://resume.viveksati.online](https://resume.viveksati.online)

---

Feel free to fork this repository and experiment with your own AWS projects! If you have questions or need assistance, don't hesitate to reach out.

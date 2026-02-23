resource "aws_s3_bucket" "week5_demo_bucket" {
  bucket = "week5-demo-bucket-blessing-001"

  tags = {
    Name        = "Week5DemoBucket"
    Environment = "Dev"
  }
}
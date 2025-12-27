import fitz
import os

# Open the catalog PDF
pdf_path = r"Assets\DERMOCEAN CATALOG_compressed.pdf"
doc = fitz.open(pdf_path)

print(f"Total Pages: {len(doc)}")
print("=" * 50)

# Extract text from each page
full_text = ""
for i in range(len(doc)):
    page = doc[i]
    text = page.get_text()
    if text.strip():
        full_text += f"\n--- PAGE {i+1} ---\n{text}"
        print(f"Page {i+1}: {len(text)} chars")

# Save the extracted text
output_path = "catalog_extracted_text.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"\nText saved to: {output_path}")
print(f"Total characters: {len(full_text)}")

# Show first 5000 chars
print("\n=== CONTENT PREVIEW ===")
print(full_text[:5000])

import newspaper

cnn_paper = newspaper.build('https://www.fox.com/')

for article in cnn_paper.articles:
    print(article.url)